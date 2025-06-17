import path from 'path';
import fs from 'fs';
import { tmpdir } from 'os';
import { Changes, Exports } from '../types.js';

export const TMP_DIR = fs.mkdtempSync(path.join(tmpdir(), 'levitate-test'));

export function generateTmpFilename() {
  return path.join(TMP_DIR, `${generateHash()}.ts`);
}

export function generateTmpFileWithContent(content: string) {
  const filename = generateTmpFilename();
  fs.writeFileSync(filename, content);
  return filename;
}

export function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}

export function getTypeChangesAsText(changes: Changes) {
  const exportNames = Object.keys(changes);

  let output = `Type changes (${exportNames.length}) explained:\n${'─'.repeat(80)}`;

  exportNames.forEach((exportName, index) => {
    const change = changes[exportName];

    output += `\n\n${index + 1}. "${exportName}"`;

    // Get the text of the previous and current declarations
    const prevText = change.prev.declarations?.[0]?.getText() || 'No declaration found';
    const currentText = change.current.declarations?.[0]?.getText() || 'No declaration found';

    output += `\n\n    Previous:\n      ${prevText.replace(/\n/g, '\n    ')}`;
    output += `\n    Current:\n      ${currentText.replace(/\n/g, '\n    ')}`;

    if (index < exportNames.length - 1) {
      output += `\n  ${'─'.repeat(78)}`;
    }
  });

  output += `\n\n${'─'.repeat(80)}\n\n`;

  return output;
}

export function getTypeRemovalsAsText(removals: Exports) {
  const exportNames = Object.keys(removals);

  let output = `Types removed (${exportNames.length}):\n${'─'.repeat(80)}\n`;

  output += exportNames.map((exportName) => `- ${exportName}`).join('\n');

  output += `\n${'─'.repeat(80)}\n\n`;

  return output;
}

export function getTypeAdditionsAsText(additions: Exports) {
  const exportNames = Object.keys(additions);

  let output = `Types added (${exportNames.length}):\n${'─'.repeat(80)}\n`;

  output += exportNames.map((exportName) => `+ ${exportName}`).join('\n');

  output += `\n${'─'.repeat(80)}\n\n`;

  return output;
}

