import getDebug from "debug";

export const debug = getDebug("levitate");

export const logError = (...args) => {
  if (!isSilent()) {
    console.error(...args);
  }
};

export function isSilent() {
  return process.env.LEVITATE_SILENT ? true : false;
}
