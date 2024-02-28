import ora, { type Ora} from 'ora';
import { isSilent } from './log.js';

const SPINNERS: Record<string, Ora> = {};

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

  getSpinner(name).succeed(msg);
}

export function failSpinner(name: string, msg: string) {
  if (isSilent()) {
    return;
  }

  getSpinner(name).fail(msg);
}

export function getSpinner(name: string): Ora {
  if (!SPINNERS[name]) {
    SPINNERS[name] = ora();
  }

  return SPINNERS[name];
}
