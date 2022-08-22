import path from 'path';
import { compareExports } from '..';
import { generateTmpFileWithContent } from './test-utils';

const fixturesFolder = path.join(__dirname, '..', '..', 'fixtures', 'compare');

describe('Utils compare tests', () => {
  it('should recognize changes in props for components', () => {
    const oldBundle = path.join(fixturesFolder, 'bundle-old-props.tsx');
    const newBundle = path.join(fixturesFolder, 'bundle-new-props.tsx');

    const comparison = compareExports(oldBundle, newBundle);
    // console.log(comparison);
  });
});
