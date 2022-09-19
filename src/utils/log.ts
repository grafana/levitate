import getDebug from 'debug';

export const logDebug = getDebug('levitate');

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
