---
slug: quick-tip-unique-values
title: Quick tip about array and unique values
authors: [necraidan]
tags: [javascript, frontend]
---

The naive way to do this is to check each value, add it to a data structure, and detect if we haven't added it before.

### The naive way

```javascript
const namesFromAnotherGalaxy = ["Luke", "Leia", "Obi-Wan", "Luke", "Obi-Wan"];

function naiveWay(names) {
  const unique = {};
  names.forEach((i) => {
    if (!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

naiveWay(namesFromAnotherGalaxy); // ['Luke', 'Leia', 'Obi-Wan']
```

Another simple way of thinking to get unique values from an array is to use the filter method to filter out the repetitive values.

<!--truncate-->

### The filter way

```javascript
const duelists = ["Yugi", "Kaiba", "Yugi", "Joey", "Joey"];

const filterWay = (names) =>
  names.filter((value, index) => names.indexOf(value) === index);

filterWay(duelists); // ['Yugi', 'Kaiba', 'Joey'];
```

But with the new native Set object we can do something smoother and easier.

### This is the way

```javascript
const thisIsTheWay = [...new Set(["kobe", "kobe", "michael", 23, 24, 23])]; // ['kobe', 'michael', 23, 24]
```

That's it, make good use of it !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [Faris Mohammed](https://unsplash.com/@pkmfaris) on [Unsplash](https://unsplash.com/photos/PQinRWK1TgU)
