import { generateTmpFileWithContent } from '../tests/test-utils.js';
import {
  createTsProgram,
  getAllIdentifiers,
  getAllPropertyAccessExpressions,
  isSymbolPrivateDeclaration,
} from '../utils/typescript.js';

describe('Typescript utils', () => {
  it('should return all the identifiers from a typescript node', () => {
    const filePath = generateTmpFileWithContent(`
        const x = Foo(1234);
        const y = Qux(1234);
        const z: Bar = {
          one: '1234',
          two: 1234,
        }
        function InnerFoo(x: number) {
          return 1;
        }
    `);
    const program = createTsProgram(filePath);
    const sourceFile = program.getSourceFile(filePath);
    const identifiers = getAllIdentifiers(sourceFile);
    const identifiersNames = identifiers.map((identifier) => identifier.text);
    expect(identifiersNames).toEqual(['x', 'Foo', 'y', 'Qux', 'z', 'Bar', 'one', 'two', 'InnerFoo', 'x']);
  });

  it('should return all the property access expressions from a typescript node', () => {
    const filePath = generateTmpFileWithContent(`
        const x = new Foo();
        x.fakeProperty;
        const y = FakeEnum.value;
    `);
    const program = createTsProgram(filePath);
    const sourceFile = program.getSourceFile(filePath);
    const expressions = getAllPropertyAccessExpressions(sourceFile);
    const expressionsText = expressions.map((expression) => expression.getText());
    expect(expressionsText).toEqual(['x.fakeProperty', 'FakeEnum.value']);
  });

  describe('isSymbolPrivateDeclaration should if symbols are private or protected properties or methods', () => {
    const filePath = generateTmpFileWithContent(`
      class Foo{
        private privateField = 'privateField';
        private privateMethod() {
        }
        protected protectedField = 'protectedField';
        protected protectedMethod() {
        }
        regularField = 'regularField';
        regularMethod() {

        }
      }
    `);
    const program = createTsProgram(filePath);
    const sourceFile = program.getSourceFile(filePath);
    const identifiers = getAllIdentifiers(sourceFile);

    it.each([
      { name: 'privateField', isPrivate: true },
      { name: 'privateMethod', isPrivate: true },
      { name: 'protectedField', isPrivate: true },
      { name: 'protectedMethod', isPrivate: true },
      { name: 'regularField', isPrivate: false },
      { name: 'regularMethod', isPrivate: false },
    ])('should return $isPrivate for $name', ({ name, isPrivate }) => {
      const identifier = identifiers.find((ident) => ident.text === name);
      expect(identifier).toBeDefined();
      const symbol = program.getTypeChecker().getSymbolAtLocation(identifier);
      expect(isSymbolPrivateDeclaration(symbol)).toBe(isPrivate);
    });
  });
});
