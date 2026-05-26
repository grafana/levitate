import yoctoSpinner, { type Spinner } from 'yocto-spinner';
import { isSilent } from './log.js';

const SPINNERS: Record<string, Spinner> = {};

export function startSpinner(name: string) {
  if (isSilent()) {
    return;
  }

  getSpinner(name).start();
}

export function setSpinner(name: string, msg: string) {
  if (isSilent()) {
    return;
  }

  getSpinner(name).text = msg;
}

export function succeedSpinner(name: string, msg: string) {
  if (isSilent()) {
    return;
  }

  getSpinner(name).success(msg);
}

export function failSpinner(name: string, msg: string) {
  if (isSilent()) {
    return;
  }

  getSpinner(name).error(msg);
}

function getSpinner(name: string): Spinner {
  if (!SPINNERS[name]) {
    SPINNERS[name] = yoctoSpinner({ text: name });
  }

  return SPINNERS[name];
}
