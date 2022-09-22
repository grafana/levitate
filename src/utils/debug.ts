import inspector from 'node:inspector';

/*
 * A strange combination of yargs and the nodejs debugger attached
 * prevents the debugger to work after process exit (event with ctrl-c)
 * but remains it connected. This fixes that issue.
 */
export function forceDebugExit() {
  if (process.env.DEBUG) {
    process.on('exit', () => {
      if (inspector.url()) {
        inspector.close();
      }
    });
  }
}
