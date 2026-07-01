import { debuglog } from 'node:util';

export const logDebug = debuglog('levitate');

export function isDebugEnabled(): boolean {
  const namespaces = (process.env.NODE_DEBUG ?? '').split(/[\s,]+/);
  return namespaces.includes('levitate') || namespaces.includes('*');
}

export const logError = (...args: any[]) => {
  if (!isSilent()) {
    console.error(...args);
  }
};

export function isSilent() {
  return process.env.LEVITATE_SILENT ? true : false;
}

export function logInfo(...args: any[]) {
  console.log(...args);
}

export function logWarning(...args: any[]) {
  if (!isSilent()) {
    console.log(...args);
  }
}
