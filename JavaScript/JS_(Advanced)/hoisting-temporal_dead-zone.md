# JavaScript Notes: Hoisting & Temporal Dead Zone (TDZ)

<!-- 
Hoisting in JS means that the variables that are declared in the memory creation phase and are not yet initialized
are still able to be accessed even though they will return undefined.
But, in the case of 'let' and 'const', javescript places these variables in a temporal dead zone, 
where these variables are un-accessable (except var).
Also functions and classes created in the normal way (function(){}) are also hoisted, 
meaning they can be accessed before they wrere declared.
But, a function created like this (const func1 = () => {} OR const func2 = function(){}) is treated as a variable,
and is inaccessible before its declaration due to TDZ.
 -->

---

# Hoisting

## Definition
**Hoisting** is JavaScript's behavior of processing **declarations** before code execution.

> ✅ Only **declarations** are hoisted.
>
> ❌ **Initializations (assignments)** stay where they are.

---

## 1. Function Hoisting

Function declarations are **fully hoisted** (name + body).

```js
greet(); // ✅ Works

function greet() {
    console.log("Hello!");
}
```

---

## 2. `var` Hoisting

`var` declarations are hoisted and initialized with `undefined`.

```js
console.log(user); // undefined

var user = "Alice";

console.log(user); // Alice
```

Engine sees it like:

```js
var user;              // Hoisted
console.log(user);     // undefined

user = "Alice";        // Assignment stays here

console.log(user);     // Alice
```

---

## 3. `let` & `const` Hoisting

`let` and `const` **are hoisted**, but **not initialized**.

Accessing them before their declaration causes a **ReferenceError** because they're in the **Temporal Dead Zone (TDZ)**.

```js
console.log(age); // ❌ ReferenceError

let age = 25;
```

---

## 4. Function Expressions & Arrow Functions

Their behavior depends on the variable (`var`, `let`, or `const`) they're assigned to.

### Using `var`

```js
sayHi(); // ❌ TypeError

var sayHi = function () {
    console.log("Hi");
};
```

Why?

```js
var sayHi;     // undefined

sayHi();       // undefined() -> TypeError

sayHi = function () {};
```

### Using `let` / `const`

```js
sayHi(); // ❌ ReferenceError

const sayHi = () => {
    console.log("Hi");
};
```

Reason:
- `sayHi` exists.
- But it's inside the **TDZ** until initialized.

---

# Hoisting Summary

| Declaration | Hoisted | Initial Value | Access Before Declaration |
|-------------|----------|---------------|---------------------------|
| `function` | ✅ Yes | Function body | ✅ Works |
| `var` | ✅ Yes | `undefined` | ✅ `undefined` |
| `let` | ✅ Yes | Uninitialized | ❌ ReferenceError |
| `const` | ✅ Yes | Uninitialized | ❌ ReferenceError |
| `class` | ✅ Yes | Uninitialized | ❌ ReferenceError |

---

# Temporal Dead Zone (TDZ)

## Definition

The **Temporal Dead Zone (TDZ)** is the time between:

- entering a scope
- and reaching the declaration of a `let`, `const`, or `class`

During this time, the variable **exists but cannot be accessed**.

Accessing it throws a **ReferenceError**.

---

## Applies To

- `let`
- `const`
- `class`

---

## Why TDZ Exists

These variables are:

- ✅ Hoisted
- ❌ Not initialized immediately

They remain unavailable until execution reaches their declaration.

---

## Example 1: Basic TDZ

```js
{
    console.log(bacon); // ❌ ReferenceError

    let bacon = "crispy";
}
```

---

## Example 2: `var` vs `let`

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError
let y = 10;
```

---

## Example 3: TDZ is Time-Based (Temporal)

The position of code doesn't matter.

Only **when** the code runs matters.

```js
{
    const showMovie = () => {
        console.log(movie);
    };

    let movie = "Inception";

    showMovie(); // ✅ Inception
}
```

The function is created before `movie`, but it's **called after** `movie` is initialized.

---

## Example 4: Default Parameter Trap

```js
function checkOut(a = b, b = 1) {
    return a + b;
}

checkOut(); // ❌ ReferenceError
```

Reason:
- `a` tries to use `b`
- `b` hasn't been initialized yet
- `b` is still in the TDZ

---

# Quick Cheatsheet

```js
greet();                // ✅ Function hoisting

console.log(x);         // undefined

console.log(y);         // ❌ ReferenceError

function greet() {}

var x = 10;

let y = 20;
```

---

# 80/20 Interview & Exam Points

- Hoisting happens during the compilation phase.
- Only **declarations** are hoisted, **not assignments**.
- Function declarations are fully hoisted.
- `var` is hoisted and initialized as `undefined`.
- `let`, `const`, and `class` are hoisted but remain **uninitialized**.
- Accessing `let`/`const` before initialization causes a **ReferenceError** because of the **Temporal Dead Zone (TDZ)**.
- Function expressions and arrow functions behave like the variable (`var`, `let`, `const`) they're assigned to.

---

# One-Line Memory Trick

- **function** → Hoisted with body → ✅ Works
- **var** → Hoisted as `undefined` → ⚠️ Safe but undefined
- **let / const** → Hoisted but in TDZ → ❌ ReferenceError
- **Function Expression / Arrow Function** → Behaves like its variable (`var`, `let`, `const`)