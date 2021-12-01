"use strict";
exports.__esModule = true;
exports.isType = exports.isEnum = exports.isInterface = exports.isVariable = exports.isClass = exports.isFunction = exports.hasTypeChanged = exports.hasEnumChanged = exports.hasClassChanged = exports.hasVariableChanged = exports.hasFunctionChanged = exports.hasChanged = exports.areChangesBreaking = exports.compareExports = void 0;
var ts = require("typescript");
var utils_log_1 = require("./utils.log");
var utils_exports_1 = require("./utils.exports");
function compareExports(prevRootFile, currentRootFile) {
    (0, utils_log_1.debug)("Old filename: %o", prevRootFile);
    (0, utils_log_1.debug)("New filename: %o", currentRootFile);
    var prev = (0, utils_exports_1.getExportInfo)(prevRootFile);
    var current = (0, utils_exports_1.getExportInfo)(currentRootFile);
    var additions = {};
    var removals = {};
    var changes = {};
    (0, utils_log_1.debug)("Previous file: %o exports", Object.keys(prev.exports).length);
    (0, utils_log_1.debug)("Current file: %o exports", Object.keys(current.exports).length);
    // Look for changes introduced by the current version
    for (var _i = 0, _a = Object.entries(current.exports); _i < _a.length; _i++) {
        var _b = _a[_i], exportName = _b[0], exportSymbol = _b[1];
        // Addition
        if (!prev.exports[exportName]) {
            additions[exportName] = exportSymbol;
            // Change
        }
        else {
            if (hasChanged({
                key: exportName,
                symbol: prev.exports[exportName],
                program: prev.program
            }, { key: exportName, symbol: exportSymbol, program: current.program })) {
                changes[exportName] = exportSymbol;
            }
        }
    }
    // Look for removals
    for (var _c = 0, _d = Object.entries(prev.exports); _c < _d.length; _c++) {
        var _e = _d[_c], exportName = _e[0], exportSymbol = _e[1];
        // Removal
        if (!current.exports[exportName]) {
            removals[exportName] = exportSymbol;
        }
    }
    return { changes: changes, additions: additions, removals: removals };
}
exports.compareExports = compareExports;
function areChangesBreaking(_a) {
    var changes = _a.changes, removals = _a.removals;
    return Object.keys(removals).length > 0 || Object.keys(changes).length > 0;
}
exports.areChangesBreaking = areChangesBreaking;
// Returns TRUE if the Symbol has changed in a non-compatible way
// (Tip: use https://ts-ast-viewer.com for discovering certain types more easily)
function hasChanged(prev, current) {
    if (isFunction(current.symbol) && isFunction(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Function)"));
        return hasFunctionChanged(prev, current);
    }
    if (isClass(current.symbol) && isClass(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Class)"));
        return hasClassChanged(prev, current);
    }
    if (isVariable(current.symbol) && isVariable(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Variable)"));
        return hasVariableChanged(prev, current);
    }
    if (isInterface(current.symbol) && isInterface(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Interface)"));
        return hasInterfaceChanged(prev, current);
    }
    if (isEnum(current.symbol) && isEnum(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Enum)"));
        return hasEnumChanged(prev, current);
    }
    if (isType(current.symbol) && isType(prev.symbol)) {
        (0, utils_log_1.debug)("Checking changes for \"".concat(current.key, "\" (Type)"));
        return hasTypeChanged(prev, current);
    }
    // In any other case we interpret it as a change.
    // This is a corner-cut and can easily be a wrong assumption, for example when only the syntax of a function changes from function declaration to a fat-arrow function, but functionality remains intact.
    // TODO: verify if it is something that we can live with or if it is causing significant issues
    return true;
}
exports.hasChanged = hasChanged;
function hasFunctionChanged(prev, current) {
    var prevDeclaration = prev.symbol
        .valueDeclaration;
    var currentDeclaration = current.symbol
        .valueDeclaration;
    // Check previous function parameters
    // (all previous parameters must be present at their previous position)
    for (var i = 0; i < prevDeclaration.parameters.length; i++) {
        // No parameter at the same position
        if (!currentDeclaration.parameters[i]) {
            return true;
        }
        // Changed parameter at the old position
        if (currentDeclaration.parameters[i].getText() !==
            prevDeclaration.parameters[i].getText()) {
            return true;
        }
    }
    // Check current function parameters
    // (all current parameters must be optional)
    for (var i = 0; i < currentDeclaration.parameters.length; i++) {
        if (!prevDeclaration.parameters[i] &&
            !current.program
                .getTypeChecker()
                .isOptionalParameter(currentDeclaration.parameters[i])) {
            return true;
        }
    }
    // Check return type signatures
    // (they must be the same)
    if (prevDeclaration.type.getText() !== currentDeclaration.type.getText()) {
        return true;
    }
    return false;
}
exports.hasFunctionChanged = hasFunctionChanged;
function hasInterfaceChanged(prev, current) {
    var prevDeclaration = prev.symbol
        .declarations[0];
    var currentDeclaration = current.symbol
        .declarations[0];
    var _loop_1 = function (i) {
        var prevMemberText = prevDeclaration.members[i].getText();
        var currentMember = currentDeclaration.members.find(function (member) { return prevMemberText === member.getText(); });
        // Member is missing in the current declaration, or has changed
        // TODO: This is quite basic at the moment, it could be refined to give less "false negatives".
        //       (Consider a case for example when an interface method receives a new optional parameter, which should not mean a breaking change)
        if (!currentMember) {
            return { value: true };
        }
    };
    // Check previous members
    // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
    for (var i = 0; i < prevDeclaration.members.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    var _loop_2 = function (i) {
        var currentMemberText = currentDeclaration.members[i].getText();
        var prevMember = prevDeclaration.members.find(function (member) { return currentMemberText === member.getText(); });
        if (!prevMember && !currentDeclaration.members[i].questionToken) {
            return { value: true };
        }
    };
    // Check current members
    // (only optional new members are allowed)
    for (var i = 0; i < currentDeclaration.members.length; i++) {
        var state_2 = _loop_2(i);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return false;
}
function hasVariableChanged(prev, current) {
    var prevDeclaration = prev.symbol.declarations[0];
    var currentDeclaration = current.symbol
        .declarations[0];
    // Changed if anything has changed in its type signature
    // (any type changes can cause issues in the code that depends on them)
    if (prevDeclaration.getText() !== currentDeclaration.getText()) {
        return true;
    }
    return false;
}
exports.hasVariableChanged = hasVariableChanged;
function hasClassChanged(prev, current) {
    var prevDeclaration = prev.symbol.declarations[0];
    var currentDeclaration = current.symbol
        .declarations[0];
    var _loop_3 = function (i) {
        var prevMemberText = prevDeclaration.members[i].getText();
        var currentMember = currentDeclaration.members.find(function (member) { return prevMemberText === member.getText(); });
        // Member is missing in the current declaration, or has changed
        // TODO: This is quite basic at the moment, it could be refined to give less "false negatives".
        //       (Consider a case for example when a class method receives a new optional parameter, which should not mean a breaking change)
        if (!currentMember) {
            return { value: true };
        }
    };
    // Check previous members
    // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
    for (var i = 0; i < prevDeclaration.members.length; i++) {
        var state_3 = _loop_3(i);
        if (typeof state_3 === "object")
            return state_3.value;
    }
    var _loop_4 = function (i) {
        var currentMemberText = currentDeclaration.members[i].getText();
        var prevMember = prevDeclaration.members.find(function (member) { return currentMemberText === member.getText(); });
        // The `questionToken` is not available on certain member types, but we don't let ourselves to be bothered by it being `undefined`
        if (!prevMember &&
            !currentDeclaration.members[i].questionToken) {
            return { value: true };
        }
    };
    // Check current members
    // (only optional new members are allowed)
    for (var i = 0; i < currentDeclaration.members.length; i++) {
        var state_4 = _loop_4(i);
        if (typeof state_4 === "object")
            return state_4.value;
    }
    return false;
}
exports.hasClassChanged = hasClassChanged;
function hasEnumChanged(prev, current) {
    var prevDeclaration = prev.symbol.declarations[0];
    var currentDeclaration = current.symbol
        .declarations[0];
    var _loop_5 = function (i) {
        var prevMemberText = prevDeclaration.members[i].getText();
        var currentMember = currentDeclaration.members.find(function (member) { return prevMemberText === member.getText(); });
        // Member is missing in the current declaration, or has changed
        if (!currentMember) {
            return { value: true };
        }
    };
    // Check previous members
    // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
    for (var i = 0; i < prevDeclaration.members.length; i++) {
        var state_5 = _loop_5(i);
        if (typeof state_5 === "object")
            return state_5.value;
    }
    // We don't care about any new members added at the moment
    // TODO: check if the statement above is valid
    return false;
}
exports.hasEnumChanged = hasEnumChanged;
function hasTypeChanged(prev, current) {
    var prevDeclaration = prev.symbol
        .declarations[0];
    var currentDeclaration = current.symbol
        .declarations[0];
    // Changed if anything has changed.
    // (This is a bit tricky, as a type declaration can be a `FunctionType`, a `UnionType`, a `TypeLiteral`, etc. A `TypeLiteral` should need to be checked similarly to a Class or an Interface.)
    // TODO: revisit how much trouble "false negatives" coming from this are causing us.
    if (prevDeclaration.getText() !== currentDeclaration.getText()) {
        return true;
    }
    return false;
}
exports.hasTypeChanged = hasTypeChanged;
function isFunction(symbol) {
    return symbol.flags & ts.SymbolFlags.Function;
}
exports.isFunction = isFunction;
function isClass(symbol) {
    return symbol.flags & ts.SymbolFlags.Class;
}
exports.isClass = isClass;
function isVariable(symbol) {
    return symbol.flags & ts.SymbolFlags.Variable;
}
exports.isVariable = isVariable;
function isInterface(symbol) {
    return symbol.flags & ts.SymbolFlags.Interface;
}
exports.isInterface = isInterface;
function isEnum(symbol) {
    return symbol.flags & ts.SymbolFlags.Enum;
}
exports.isEnum = isEnum;
function isType(symbol) {
    return symbol.flags & ts.SymbolFlags.Type;
}
exports.isType = isType;
