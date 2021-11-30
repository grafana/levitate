import * as ts from "typescript";

export function createProgram(fileName: string): ts.Program {
  const program = ts.createProgram([fileName], {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React,
    allowJs: true,
    esModuleInterop: true,
  });

  program.getTypeChecker();

  return program;
}
