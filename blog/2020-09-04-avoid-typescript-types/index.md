---
slug: quick-tip-avoid-typescript-types
title: Quick tip about TypeScript and why to avoid these types
authors: [necraidan]
tags: [javascript, frontend, typescript]
---

Avoid the non-primitive `Number`, `String`, `Boolean`, `Object`, and `Symbol` types in **TypeScript**.

All of them refer to **non-primitive** reference types.

Instead, prefer the corresponding **primitive** types.

<!--truncate-->

```typescript
let textToCheck: String = "text";
console.log(typeof textToCheck); // 'string'
console.log(textToCheck === "text"); // true

textToCheck = new String("text");
console.log(typeof textToCheck); // 'object'
console.log(textToCheck === "text"); // false
```

It's easy to failed your equality check with them.

There is also a performance part that I will not detail here. I recommend this article from [mozilla](https://hacks.mozilla.org/2012/12/performance-with-javascript-string-objects/) which makes a performance comparison between a literal string and its object version in **JavaScript**.

That's it, make good use of it !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [JC Dela Cuesta](https://unsplash.com/@markuswinkler) on [Unsplash](https://unsplash.com/photos/QFPtc0EGCtI)
