---
slug: var-wars-rise-es2015
title: Var Wars, The Rise of ES2015
authors: [necraidan]
tags: [javascript, frontend]
---

In this article, we will explore the different ways to declare a variable in JavaScript.

We will also see why var is so problematic and why it must be avoided.

### **var** in a nutshell (aka Var Wars, _the Hoisting Menace_)

Until ES5, this is the only way to declare a variable.

```javascript
// Declaring variable
var sith;
// Init
sith = "Darth Vader";
```

or directly

```javascript
// Declaring variable & init
var sith = "Darth Vader";
```

Like other languages, is simple to declare a variable.
But in JavaScript, scoping works differently.

<!--truncate-->

**var** is **function scoped**, it refer to the parent function.
If there is no parent function, your **var** is **global**.

```javascript
var hanShotFirst = true;

if (true) {
  var hanShotFirst = false;
}

console.log(hanShotFirst); // false
```

As you can see, you can rewrite and redeclare our variable **hanShotFirst** (while it's really Han who shoots first, anyway).

Another weird thing :

```javascript
var obiWan = "🧔🏼";

console.log(obiWan); // '🧔🏼'
console.log(anakin); // 'undefined' with no error

var anakin = "💇‍♂️";
console.log(anakin); // '💇‍♂️'
```

This atypical behavior is called **hoisting**

In fact, **JavaScript** engine reads the script before its execution like :

```javascript
var obiWan = "🧔🏼";
var anakin;

console.log(obiWan); // '🧔🏼'
console.log(anakin); // 'undefined' with no error

anakin = "💇‍♂️";
console.log(anakin); // '💇‍♂️'
```

The engine goes up variables and function declarations, as high as possible at the beginning of the parent function.

It is then possible to use the functions and variables of the script before they are actually declared ! 🧐

I feel a disturbance in the force...

### ES2015 coming with **let** and **const** (aka Var Wars, _the New Scope_)

The new version of the **ES2015** standard comes with few interesting features like new variable declarations **let** and **const**.

```javascript
let deathStar = "destroyed";

if (deathStar === "destroyed") {
  let deathStar = "pending";
}

console.log(deathStar); // 'destroyed', parent scope !
```

As you can see, **let** resolve our previous problems.

It prevent :

- can't use before init (throw error)
- can't redeclare in same block (throw error)
- block scoped (prevent shadowing)

What about **const** ?

Yes, you can declare a constant, but not like other language.

```javascript
const deathStarV2 = {
  engine: "off",
};

deathstarV2 = new DeathStar("V3"); // Uncaught TypeError: Assignment to constant variable.

deathstarV2.engine = "on"; // it works ! 🚀🚀🚀
```

We can keep the reference of the object, not its content.

##Conclusion

I hope this little article gave you a good understanding of all the three ways to declare variables in JavaScript.

We understand why **var** is dangerous and why we should use **let** and **const** instead.

It's basic but essential.

That's it for today, thanks for reading !
May the code be with you !

---

I'm not a native English speaker so, thanks in advance if you want to improve my article with correct syntax/grammar/sentences.

I can accept all kind remarks :)

Cover by [Benjamin Auzanneau](https://unsplash.com/@necraidan) on [Unsplash](https://unsplash.com/photos/CAhxrrK34pg)
