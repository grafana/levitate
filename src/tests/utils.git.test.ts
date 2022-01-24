import { getSanitizedRepoUrl, getRepoNameFromUrl } from "../utils.git";

describe("Utils/Git", () => {
  describe("getSanitizedRepoUrl()", () => {
    test("should cut the trailing slash from a URL", () => {
      expect(getSanitizedRepoUrl("https://github.com/grafana/grafana/")).toBe("https://github.com/grafana/grafana");
    });

    test("should not touch a URL that does not need to be sanitized", () => {
      expect(getSanitizedRepoUrl("https://github.com/grafana/grafana")).toBe("https://github.com/grafana/grafana");
    });
  });

  describe("getRepoNameFromUrl()", () => {
    test("returns the repo name from a URL", () => {
      expect(getRepoNameFromUrl("https://github.com/grafana/grafana/")).toBe("grafana");
      expect(getRepoNameFromUrl("https://github.com/grafana/grafana")).toBe("grafana");
    });
  });
});
