---
slug: quick-tip-or-coalescing
title: Quick tip about || vs ??
authors: [necraidan]
tags: [javascript, frontend]
---

The **nullish coalescing operator** will help us to define nullary values equality (**null** or **undefined**), unlike the || operator.

```javascript
const basketValue = 0;
const orBasketValue = basketValue || 14;
const nullishBasketValue = basketValue ?? 14;
```

### What happened here ?

<!--truncate-->

The **nullish coalescing operator** (the **??**) is a _logical operator_ that returns its _right-hand side operand_ when its _left-hand side operand_ is **null** or **undefined**. Otherwise returns its _left-hand side operand_.

`||` implicitly converts our number to nullish value and returns `14`.
`??` checks the value of **basketValue** (different to nullary values) and returns `0`

So, in our example, the `orBasketValue` is equal to `14` and `nullishBasketValue` is equal to `0`.

That's it, make good use of it !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [JC Dela Cuesta](https://unsplash.com/@jdelacuesta) on [Unsplash](https://unsplash.com/photos/itqkcMEix64)
