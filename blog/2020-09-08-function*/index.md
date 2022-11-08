---
slug: quick-tip-function*
title: Quick tip about function vs function*
authors: [necraidan]
tags: [javascript, frontend]
---

What is `function *` ?

It's **generator function** which returns a **Generator object**.
**Generators** are intricately linked with iterators.

But what is a **generator function** ?

<!--truncate-->

It's a **function** that can stop _midway_ and then _continue_ from where it stopped !

```typescript
function* generatorExample() {
  let counter = 0;
  yield `First step ! ${counter}`;
  counter++;
  yield `Second step ! ${counter}`;
  counter++;
  console.log("No yield, the function is done");
}

const generator = generatorExample();
console.log(generator.next().value); // First step ! 1
console.log(generator.next().value); // Second step ! 2
console.log(generator.next().value); // No yield, the function is done
```

The **Generator object** offers a `next()` function that you can call to go further into the next _step_ of the **generator**.

You can check [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) for more information.

That's it, make good use of it !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [Wolfgang Rottmann](https://unsplash.com/@quadratmedia) on [Unsplash](https://unsplash.com/photos/yjF6EZGvKys)
