import path from "path";
import { getPackageJson, getPackageJsonPath, getNpmDependencies, hasPackageJson } from "../utils.npm";

// Using the projects package.json for testing
const PACKAGE_PATH = path.join(__dirname, "..", "..");
const WRONG_PACKAGE_PATH = __dirname;

describe("Utils/NPM", () => {
  describe("getPackageJson()", () => {
    test("should return the package.json object if it exists", () => {
      const packageJson = getPackageJson(PACKAGE_PATH);

      expect(packageJson).not.toBeNull();
      expect(typeof packageJson.version).toBe("string");
    });

    test("should return an empty object if the package json does not exist", () => {
      const packageJson = getPackageJson(WRONG_PACKAGE_PATH);

      expect(packageJson).toBeNull();
    });
  });

  describe("hasPackageJson()", () => {
    test("should return TRUE if the package.json exists", () => {
      expect(hasPackageJson(PACKAGE_PATH)).toBe(true);
    });

    test("should return FALSE if the package.json does not exists", () => {
      expect(hasPackageJson(WRONG_PACKAGE_PATH)).toBe(false);
    });
  });

  describe("getPackageJsonPath()", () => {
    test("should return the path to a package.json in a folder", () => {
      expect(getPackageJsonPath(PACKAGE_PATH)).toBe(`${PACKAGE_PATH}/package.json`);
    });
  });

  describe("getNpmDependencies()", () => {
    test("should return an object that contains both dev and prod dependencies", () => {
      const dependencies = getNpmDependencies(PACKAGE_PATH);

      expect(typeof dependencies["yargs"]).toBe("string"); // prod dependency
      expect(typeof dependencies["jest"]).toBe("string"); // dev dependency
    });

    test("should return an empty object in case the package json does not exist", () => {
      const dependencies = getNpmDependencies(WRONG_PACKAGE_PATH);

      expect(Object.keys(dependencies).length).toBe(0);
    });
  });
});
