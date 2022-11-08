---
slug: quick-tip-settimeout
title: Quick tip about setTimeout function
authors: [necraidan]
tags: [javascript, frontend]
---

In JavaScript, we have the **[event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)**.

So, without [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API]), **JavaScript** is _single-threaded, non-blocking, asynchronous, concurrent language_.

What can I do with the **setTimeout** function ?

<!--truncate-->

I can launch the execution of a part of your code after a delay.

[The delay may be longer than intended](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified).

```javascript
setTimeout(() => console.log("After the delay"), 5000);

console.log("Before the delay");

// Printed => 'Before the delay'
// After ≈ 5 secondes => 'After the delay'
```

### One more thing

Sometimes you can see this kind of code.

```javascript
setTimeout(() => {
  someHTMLNode.style.color = "yellow";
}, 0);
```

We are manipulating a property of a _node element_ (it's a _DOM element_).
But the _DOM_ is not ready, `someHTMLNode` doesn't exist.

The`setTimeout(fn, 0)` is a _workaround_, we can delay our affection after the DOM rendering !

That's it, make good use of it !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [Icons8 Team](https://unsplash.com/@icons8) on [Unsplash](https://unsplash.com/photos/dhZtNlvNE8M)
