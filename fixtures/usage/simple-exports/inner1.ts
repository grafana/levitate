//@ts-ignore
import { getParser, guessDecimals } from '@grafana/data';

export function inner1() {
  getParser('json');
  inner1sub();
}

function inner1sub() {
  guessDecimals(1.234);
}
