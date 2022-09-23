//@ts-ignore
import { isValidDate, parseFlags } from '@grafana/data';

export function inner2() {
  isValidDate(new Date());
  inner2sub();
}

function inner2sub() {
  parseFlags('json');
}
