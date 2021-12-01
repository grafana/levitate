import * as ts from "typescript";
import { debug } from "./utils.log";
import { SymbolMeta, Comparison } from "./types";
import { getExportInfo } from "./utils.exports";

export function compareExports(
  prevRootFile: string,
  currentRootFile: string
): Comparison {
  debug("Old filename: %o", prevRootFile);
  debug("New filename: %o", currentRootFile);

  const prev = getExportInfo(prevRootFile);
  const current = getExportInfo(currentRootFile);
  const additions = {};
  const removals = {};
  const changes = {};

  debug("Previous file: %o exports", Object.keys(prev.exports).length);
  debug("Current file: %o exports", Object.keys(current.exports).length);

  // Look for changes introduced by the current version
  for (const [currentExportName, currentExportSymbol] of Object.entries(
    current.exports
  )) {
    // Addition
    if (!prev.exports[currentExportName]) {
      additions[currentExportName] = currentExportSymbol;
    }

    // Change
    // (present in the previous version as well)
    else {
      if (
        hasChanged(
          {
            key: currentExportName,
            symbol: prev.exports[currentExportName],
            program: prev.program,
          },
          {
            key: currentExportName,
            symbol: currentExportSymbol,
            program: current.program,
          }
        )
      ) {
        changes[currentExportName] = {
          prev: prev.exports[currentExportName],
          current: currentExportSymbol,
        };
      }
    }
  }

  // Removals
  // (look for exported entries that cannot be found in the new version)
  for (const [exportName, exportSymbol] of Object.entries(prev.exports)) {
    if (!current.exports[exportName]) {
      removals[exportName] = exportSymbol;
    }
  }

  return { changes, additions, removals };
}

export function areChangesBreaking({ changes, removals }: Comparison) {
  return Object.keys(removals).length > 0 || Object.keys(changes).length > 0;
}

// Returns TRUE if the Symbol has changed in a non-compatible way
// (Tip: use https://ts-ast-viewer.com for discovering certain types more easily)
export function hasChanged(prev: SymbolMeta, current: SymbolMeta) {
  if (isFunction(current.symbol) && isFunction(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Function)`);
    return hasFunctionChanged(prev, current);
  }

  if (isClass(current.symbol) && isClass(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Class)`);
    return hasClassChanged(prev, current);
  }

  if (isVariable(current.symbol) && isVariable(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Variable)`);
    return hasVariableChanged(prev, current);
  }

  if (isInterface(current.symbol) && isInterface(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Interface)`);
    return hasInterfaceChanged(prev, current);
  }

  if (isEnum(current.symbol) && isEnum(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Enum)`);
    return hasEnumChanged(prev, current);
  }

  if (isType(current.symbol) && isType(prev.symbol)) {
    debug(`Checking changes for "${current.key}" (Type)`);
    return hasTypeChanged(prev, current);
  }

  // In any other case we interpret it as a NON-CHANGE.
  // This is a corner-cut and can easily be a wrong assumption.
  // TODO: verify if it is something that we can live with or if it is causing significant issues
  return false;
}

export function hasFunctionChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol
    .valueDeclaration as ts.FunctionDeclaration;
  const currentDeclaration = current.symbol
    .valueDeclaration as ts.FunctionDeclaration;

  // Check previous function parameters
  // (all previous parameters must be present at their previous position)
  for (let i = 0; i < prevDeclaration.parameters.length; i++) {
    // No parameter at the same position
    if (!currentDeclaration.parameters[i]) {
      return true;
    }

    // Changed parameter at the old position
    if (
      currentDeclaration.parameters[i].getText() !==
      prevDeclaration.parameters[i].getText()
    ) {
      return true;
    }
  }

  // Check current function parameters
  // (all current parameters must be optional)
  for (let i = 0; i < currentDeclaration.parameters.length; i++) {
    if (
      !prevDeclaration.parameters[i] &&
      !current.program
        .getTypeChecker()
        .isOptionalParameter(currentDeclaration.parameters[i])
    ) {
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

function hasInterfaceChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol
    .declarations[0] as ts.InterfaceDeclaration;
  const currentDeclaration = current.symbol
    .declarations[0] as ts.InterfaceDeclaration;

  // Check previous members
  // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
  for (let i = 0; i < prevDeclaration.members.length; i++) {
    const prevMemberText = prevDeclaration.members[i].getText();
    const currentMember = currentDeclaration.members.find(
      (member) => prevMemberText === member.getText()
    );

    // Member is missing in the current declaration, or has changed
    // TODO: This is quite basic at the moment, it could be refined to give less "false negatives".
    //       (Consider a case for example when an interface method receives a new optional parameter, which should not mean a breaking change)
    if (!currentMember) {
      return true;
    }
  }

  // Check current members
  // (only optional new members are allowed)
  for (let i = 0; i < currentDeclaration.members.length; i++) {
    const currentMemberText = currentDeclaration.members[i].getText();
    const prevMember = prevDeclaration.members.find(
      (member) => currentMemberText === member.getText()
    );

    if (!prevMember && !currentDeclaration.members[i].questionToken) {
      return true;
    }
  }

  return false;
}

export function hasVariableChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.declarations[0] as ts.VariableDeclaration;
  const currentDeclaration = current.symbol
    .declarations[0] as ts.VariableDeclaration;

  // Changed if anything has changed in its type signature
  // (any type changes can cause issues in the code that depends on them)
  if (prevDeclaration.getText() !== currentDeclaration.getText()) {
    return true;
  }

  return false;
}

export function hasClassChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.declarations[0] as ts.ClassDeclaration;
  const currentDeclaration = current.symbol
    .declarations[0] as ts.ClassDeclaration;

  // Check previous members
  // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
  for (let i = 0; i < prevDeclaration.members.length; i++) {
    const prevMemberText = prevDeclaration.members[i].getText();
    const currentMember = currentDeclaration.members.find(
      (member) => prevMemberText === member.getText()
    );

    // Member is missing in the current declaration, or has changed
    // TODO: This is quite basic at the moment, it could be refined to give less "false negatives".
    //       (Consider a case for example when a class method receives a new optional parameter, which should not mean a breaking change)
    if (!currentMember) {
      return true;
    }
  }

  // Check current members
  // (only optional new members are allowed)
  for (let i = 0; i < currentDeclaration.members.length; i++) {
    const currentMemberText = currentDeclaration.members[i].getText();
    const prevMember = prevDeclaration.members.find(
      (member) => currentMemberText === member.getText()
    );

    // The `questionToken` is not available on certain member types, but we don't let ourselves to be bothered by it being `undefined`
    if (
      !prevMember &&
      !(currentDeclaration.members[i] as ts.PropertyDeclaration).questionToken
    ) {
      return true;
    }
  }

  return false;
}

export function hasEnumChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.declarations[0] as ts.EnumDeclaration;
  const currentDeclaration = current.symbol
    .declarations[0] as ts.EnumDeclaration;

  // Check previous members
  // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
  for (let i = 0; i < prevDeclaration.members.length; i++) {
    const prevMemberText = prevDeclaration.members[i].getText();
    const currentMember = currentDeclaration.members.find(
      (member) => prevMemberText === member.getText()
    );

    // Member is missing in the current declaration, or has changed
    if (!currentMember) {
      return true;
    }
  }

  // We don't care about any new members added at the moment
  // TODO: check if the statement above is valid

  return false;
}

export function hasTypeChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol
    .declarations[0] as ts.TypeAliasDeclaration;
  const currentDeclaration = current.symbol
    .declarations[0] as ts.TypeAliasDeclaration;

  // Changed if anything has changed.
  // (This is a bit tricky, as a type declaration can be a `FunctionType`, a `UnionType`, a `TypeLiteral`, etc. A `TypeLiteral` should need to be checked similarly to a Class or an Interface.)
  // TODO: revisit how much trouble "false negatives" coming from this are causing us.
  if (prevDeclaration.getText() !== currentDeclaration.getText()) {
    return true;
  }

  return false;
}

export function isFunction(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Function;
}

export function isClass(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Class;
}

export function isVariable(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Variable;
}
export function isInterface(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Interface;
}

export function isEnum(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Enum;
}

export function isType(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Type;
}
