import * as ts from 'typescript';

export const COMPILER_OPTIONS = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  jsx: ts.JsxEmit.React,
  allowJs: true,
  esModuleInterop: true,
};

export function createProgram(fileName: string): ts.Program {
  const program = ts.createProgram([fileName], COMPILER_OPTIONS);

  program.getTypeChecker();

  return program;
}
