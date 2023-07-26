import ts from 'typescript';
import { Change, ChangeType, Comparison, IgnoreExportChanges, SymbolMeta } from '../../types';
import { setSpinner, startSpinner, succeedSpinner } from '../../utils/spinner';
import { logDebug } from '../../utils/log';
import { getExportInfo } from '../../compiler/exports';
import { getSymbolFromParameter } from '../../utils/typescript';

export function compareExports(
  prevRootFile: string,
  currentRootFile: string,
  ignoredExports: IgnoreExportChanges
): Comparison {
  setSpinner('compare', 'Detecting changes between versions');
  startSpinner('compare');

  logDebug('Old filename: %o', prevRootFile);
  logDebug('New filename: %o', currentRootFile);

  const prev = getExportInfo(prevRootFile);
  const current = getExportInfo(currentRootFile);

  const additions = {};
  const removals = {};
  const changes: Record<string, Change> = {};

  logDebug('Previous file: %o exports', Object.keys(prev.exports).length);
  logDebug('Current file: %o exports', Object.keys(current.exports).length);

  // Look for changes introduced by the current version
  for (const [currentExportName, currentExportSymbol] of Object.entries(current.exports)) {
    // Addition
    if (!prev.exports[currentExportName]) {
      if (!isIgnoredExport(currentExportName, ignoredExports.additions)) {
        additions[currentExportName] = currentExportSymbol;
      }
    }

    // Change
    // (present in the previous version as well)
    else {
      if (
        !isIgnoredExport(currentExportName, ignoredExports.changes) &&
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
          prevProgram: prev.program,
          currentProgram: current.program,
        };
      }
    }
  }

  // Removals
  // (look for exported entries that cannot be found in the new version)
  for (const [exportName, exportSymbol] of Object.entries(prev.exports)) {
    if (!current.exports[exportName] && !isIgnoredExport(exportName, ignoredExports.removals)) {
      removals[exportName] = exportSymbol;
    }
  }

  succeedSpinner('compare', 'Successfully compared versions');

  return { changes, additions, removals, prevProgram: prev.program, currentProgram: current.program };
}

function isIgnoredExport(exportName: string, regexes?: RegExp[]) {
  if (!regexes) {
    return false;
  }
  return regexes.some((regex) => regex.test(exportName));
}

export function areChangesBreaking({ changes, removals }: Comparison) {
  return Object.keys(removals).length > 0 || Object.keys(changes).length > 0;
}

// Returns TRUE if the Symbol has changed in a non-compatible way
// (Tip: use https://ts-ast-viewer.com for discovering certain types more easily)
export function hasChanged(prev: SymbolMeta, current: SymbolMeta) {
  if (isFunction(current.symbol) && isFunction(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Function)`);
    return hasFunctionChanged(prev, current);
  }

  if (isMethod(current.symbol) && isMethod(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Method)`);
    return hasFunctionChanged(prev, current);
  }

  if (isClass(current.symbol) && isClass(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Class)`);
    return hasClassChanged(prev, current);
  }

  if (isVariable(current.symbol) && isVariable(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Variable)`);
    return hasVariableChanged(prev, current);
  }

  if (isInterface(current.symbol) && isInterface(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Interface)`);
    return hasInterfaceChanged(prev, current);
  }

  if (isEnum(current.symbol) && isEnum(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Enum)`);
    return hasEnumChanged(prev, current);
  }

  if (isType(current.symbol) && isType(prev.symbol)) {
    logDebug(`Checking changes for "${current.key}" (Type)`);
    return hasTypeChanged(prev, current);
  }

  // In any other case we interpret it as a NON-CHANGE.
  // This is a corner-cut and can easily be a wrong assumption.
  // TODO: verify if it is something that we can live with or if it is causing significant issues
  return false;
}

export function getFunctionParametersDiff({
  prev,
  current,
}: {
  prev: SymbolMeta;
  current: SymbolMeta;
}): Change | undefined {
  const prevDeclaration = prev.symbol.valueDeclaration as ts.FunctionDeclaration;
  const currentDeclaration = current.symbol.valueDeclaration as ts.FunctionDeclaration;
  // Check previous function parameters
  // (all previous parameters must be present at their previous position)
  for (let i = 0; i < prevDeclaration.parameters.length; i++) {
    const prevParamType = prevDeclaration.parameters[i].type;
    const prevParamSymbol = getSymbolFromParameter(prevDeclaration.parameters[i], prev.program);

    // No parameter at the same position
    if (!currentDeclaration.parameters[i]) {
      return {
        prev: prevParamSymbol,
        prevProgram: prev.program,
        current: null,
        currentProgram: current.program,
        type: ChangeType.PARAMETER_MISSING,
      };
    }

    // Changed parameter at the old position
    if (currentDeclaration.parameters[i].getText() !== prevDeclaration.parameters[i].getText()) {
      const currentParamSymbol = getSymbolFromParameter(currentDeclaration.parameters[i], current.program);
      return {
        prev: prevParamSymbol,
        prevProgram: prev.program,
        current: currentParamSymbol,
        currentProgram: current.program,
        type: ChangeType.PARAMETER_NAME,
      };
    }

    const currentParamType = currentDeclaration.parameters[i]?.type || undefined;
    const currentParamSymbol = getSymbolFromParameter(currentDeclaration.parameters[i], current.program);

    // native types (e.g. MouseEvent) don't have declarations
    if (!currentParamSymbol.declarations || !prevParamSymbol.declarations) {
      return;
    }

    if (ts.isTypeReferenceNode(currentParamType) && ts.isTypeReferenceNode(prevParamType)) {
      if (currentParamSymbol.declarations[0].getText() !== prevParamSymbol.declarations[0].getText()) {
        return {
          prev: prevParamSymbol,
          prevProgram: prev.program,
          current: currentParamSymbol,
          currentProgram: current.program,
          type: ChangeType.PARAMETER_TYPE,
        };
      }
    }
  }

  // Check current function parameters
  // (all current parameters must be optional)
  for (let i = 0; i < currentDeclaration.parameters.length; i++) {
    const currentParamSymbol = getSymbolFromParameter(currentDeclaration.parameters[i], current.program);
    if (
      !prevDeclaration.parameters[i] &&
      !current.program.getTypeChecker().isOptionalParameter(currentDeclaration.parameters[i])
    ) {
      return {
        prev: null,
        prevProgram: prev.program,
        current: currentParamSymbol,
        currentProgram: current.program,
        type: ChangeType.PARAMETER_ADDITION,
      };
    }
  }
}

export function hasFunctionChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.valueDeclaration as ts.FunctionDeclaration;
  const currentDeclaration = current.symbol.valueDeclaration as ts.FunctionDeclaration;

  const parameterChanges = getFunctionParametersDiff({ prev, current });
  if (parameterChanges) {
    return true;
  }

  // Check return type signatures -> they must be the same
  // (It can happen that a function/method does not have a return type defined)
  if (prevDeclaration.type?.getText() !== currentDeclaration.type?.getText()) {
    return true;
  }

  return false;
}

function hasInterfaceChanged(prev: SymbolMeta, current: SymbolMeta) {
  // Looping through previous members to find changes and removals
  // TODO: figure out how to fix the typing
  // @ts-ignore
  for (let entry of prev.symbol.members.entries()) {
    const [memberName, prevMember]: [ts.__String, ts.Symbol] = entry;
    const currentMember = current.symbol.members.get(memberName);

    // Member is missing in the current declaration
    // (anything implementing this interface will still work if a "required" member is removed)
    if (!currentMember) {
      return false;
    }

    // Check if the implementation has changed in a breaking way
    const changed = hasChanged(
      {
        key: memberName.toString(),
        symbol: prevMember,
        program: prev.program,
      },
      {
        key: memberName.toString(),
        symbol: currentMember,
        program: prev.program,
      }
    );

    // If it is a breaking change, then bail out early
    if (changed) {
      return true;
    }

    // If a previously optional member becomes not optional, then it is a breaking change
    if (
      (prevMember.valueDeclaration as ts.PropertySignature)?.questionToken &&
      !(currentMember.valueDeclaration as ts.PropertySignature)?.questionToken
    ) {
      return true;
    }
  }

  // Looping through new members to find additions
  // TODO: figure out how to fix the typing
  // TODO: think about how a new member can introduce a breaking change - currently we are not handling any new members as a breaking change
  // @ts-ignore
  for (let entry of current.symbol.members.entries()) {
    const [memberName, currentMember]: [ts.__String, ts.Symbol] = entry;
    const prevMember = prev.symbol.members.get(memberName);

    // It is not a new member, we already took care of it
    if (prevMember) {
      continue;
    }

    // New optional member -> does not need to be implemented so it is not a breaking change
    if ((currentMember.valueDeclaration as ts.PropertySignature)?.questionToken) {
      return false;
    }

    // New member -> would need to be implemented, so it is a breaking change
    return true;
  }

  return false;
}

export function hasVariableChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.declarations[0] as ts.VariableDeclaration;
  const currentDeclaration = current.symbol.declarations[0] as ts.VariableDeclaration;

  // Changed if anything has changed in its type signature
  // (any type changes can cause issues in the code that depends on them)
  if (prevDeclaration.getText() !== currentDeclaration.getText()) {
    return true;
  }

  return false;
}

export function hasClassChanged(prev: SymbolMeta, current: SymbolMeta) {
  // TODO: figure out how to fix the typing
  // @ts-ignore
  for (let entry of prev.symbol.members.entries()) {
    const [memberName, prevMember]: [ts.__String, ts.Symbol] = entry;
    const currentMember = current.symbol.members.get(memberName);

    // Member is missing in the current declaration, or has changed
    if (!currentMember) {
      return true;
    }

    // Check if the implementation has changed in a breaking way
    const changed = hasChanged(
      {
        key: memberName.toString(),
        symbol: prevMember,
        program: prev.program,
      },
      {
        key: memberName.toString(),
        symbol: currentMember,
        program: prev.program,
      }
    );

    // If changed then bail out early
    if (changed) {
      return true;
    }

    const prevDeclaration = prevMember.valueDeclaration as ts.PropertyDeclaration;
    const currentDeclaration = currentMember.valueDeclaration as ts.PropertyDeclaration;

    // If a member changes from `public` to `private` or `protected` -> breaking change
    if (isPublic(prevDeclaration) && (isPrivate(currentDeclaration) || isProtected(currentDeclaration))) {
      return true;
    }

    // If a member changes from `protected` to `private` -> breaking change
    if (isProtected(prevDeclaration) && isPrivate(currentDeclaration)) {
      return true;
    }
  }

  // TODO: think about how a new member can introduce a breaking change - currently we are not handling any new members as a breaking change
  return false;
}

export function hasEnumChanged(prev: SymbolMeta, current: SymbolMeta) {
  const prevDeclaration = prev.symbol.declarations[0] as ts.EnumDeclaration;
  const currentDeclaration = current.symbol.declarations[0] as ts.EnumDeclaration;

  // Check previous members
  // (all previous members must be left intact, otherwise any code that depends on them can possibly have type errors)
  for (let i = 0; i < prevDeclaration.members.length; i++) {
    const prevMemberText = prevDeclaration.members[i].getText();
    const currentMember = currentDeclaration.members.find((member) => prevMemberText === member.getText());

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
  const prevDeclaration = prev.symbol.declarations[0] as ts.TypeAliasDeclaration;
  const currentDeclaration = current.symbol.declarations[0] as ts.TypeAliasDeclaration;

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

export function isMethod(symbol: ts.Symbol) {
  return symbol.flags & ts.SymbolFlags.Method;
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

export function isPrivate(declaration: ts.PropertyDeclaration) {
  return Boolean(declaration?.modifiers?.find((modifier) => modifier.kind === ts.SyntaxKind.PrivateKeyword));
}

export function isProtected(declaration: ts.PropertyDeclaration) {
  return Boolean(declaration?.modifiers?.find((modifier) => modifier.kind === ts.SyntaxKind.ProtectedKeyword));
}

// In TypeScript each member is `public` by default, so it does not have to have a public modifier on the declaration to be public.
export function isPublic(declaration: ts.PropertyDeclaration) {
  return !Boolean(
    declaration?.modifiers?.find(
      (modifier) => modifier.kind === ts.SyntaxKind.ProtectedKeyword || modifier.kind === ts.SyntaxKind.PrivateKeyword
    )
  );
}
