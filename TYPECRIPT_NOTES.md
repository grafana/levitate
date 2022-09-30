# Typescript Notes: Learnings from using the typescript compiler API.

## Dependencies are important

Given a snippet like this:

```typescript
import {Foo} from 'testing-mod';

const bar = new Foo();
bar.method();
```

If this was a real project and you didn't install the package `testing-mod` using something like `yarn add testing-mod`
typescript can't know `method` type. It will report `method` as any.

This is vital to know if typescript Symbols are related to other symbols.

In this case, if the dependencies were installed, we could easily get the `method` definition and ask
its parent which will be reported as `Foo`.

If dependencies were not installed `method` declaration would be `any` and you could not get its parent.
