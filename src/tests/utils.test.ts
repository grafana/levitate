import { isValidGrafanaVersion } from '../utils';

describe('General utilities', () => {
  describe('isValidGrafanaVersion', () => {
    test.each(['latest', 'canary', '8.0.0', '9.0.0', '9.0.1'])('should return true for %s', (version) => {
      expect(isValidGrafanaVersion(version)).toBe(true);
    });

    test.each(['foo', '8', '9.0', '9.1', '8.0.0-beta', '8.0.0-beta.1'])('should return false for %s', (version) => {
      expect(isValidGrafanaVersion(version)).toBe(false);
    });
  });
});
