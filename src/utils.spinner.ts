import ora from "ora";

const SPINNERS: Record<string, ora.Ora> = {};

export function startSpinner(name: string) {
  getSpinner(name).start();
}

export function setSpinner(name: string, msg: string) {
  getSpinner(name).text = msg;
}

export function succeedSpinner(name: string, msg: string) {
  getSpinner(name).succeed(msg);
}

export function failSpinner(name: string, msg: string) {
  getSpinner(name).fail(msg);
}

export function getSpinner(name: string): ora.Ora {
  if (!SPINNERS[name]) {
    SPINNERS[name] = ora();
  }

  return SPINNERS[name];
}
