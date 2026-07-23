# JavaScript Execution Model

## JavaScript is Single-Threaded and Synchronous

By default, JavaScript is **single-threaded** and **synchronous**.

- **Single-threaded:** JavaScript executes one task at a time using a single call stack.
- **Synchronous:** Each statement is executed in order. The next line waits until the current one finishes.

---

# JavaScript Execution Phases

Whenever JavaScript code runs, it goes through two phases:

## 1. Memory Creation Phase (Creation Phase)

Before any code executes, JavaScript scans the program and allocates memory.

- Variables are created and initialized with `undefined`.
- Function declarations are stored entirely in memory.
- No actual execution happens in this phase.

### Example

```js
console.log(a); // undefined

var a = 10;

function greet() {
    console.log("Hello");
}
```

Memory after the creation phase:

| Identifier | Value |
|------------|-------|
| `a` | `undefined` |
| `greet` | Function definition |

---

## 2. Execution Phase

During this phase:

- Code executes line by line.
- Variables receive their actual values.
- Function calls create a **new Execution Context**.
- Every execution context has:
  - Its own memory (variables)
  - Its own lexical environment (scope)
  - Its own place on the Call Stack

When the function finishes, its execution context is removed from the Call Stack.

---

# JavaScript Engine (V8)

The V8 engine (used by Chrome and Node.js) consists of several important components:

- **Memory Heap** → Stores objects and function definitions.
- **Call Stack** → Executes function calls.
- **Web APIs (Browser)** → Provides asynchronous features like timers, DOM events, and networking.
- **Event Loop** → Coordinates asynchronous execution.
- **Microtask Queue**
- **Macrotask (Task) Queue**

---

# How Asynchronous JavaScript Works

Example:

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 2000);

console.log("End");
```

### Execution Flow

1. `console.log("Start")` executes.
2. `setTimeout()` is encountered.
3. The timer is handled by the browser's **Web API**, not the Call Stack.
4. The Call Stack continues executing.
5. `console.log("End")` executes.
6. After 2 seconds, the callback is placed into the **Macrotask Queue**.
7. The **Event Loop** waits until the Call Stack is empty.
8. The callback is pushed onto the Call Stack and executed.

Output:

```text
Start
End
Timeout
```

---

# Event Loop

The **Event Loop** continuously checks:

1. Is the Call Stack empty?
2. If yes, execute all pending **Microtasks**.
3. If no Microtasks remain, execute one **Macrotask**.
4. Repeat.

**Priority Order**

```text
Call Stack
      ↓
Microtask Queue
      ↓
Macrotask Queue
```

---

# Microtask Queue (Higher Priority)

Microtasks execute **immediately after the current synchronous code** finishes and **before any Macrotask**.

Common Microtasks:

- Promise `.then()`
- Promise `.catch()`
- Promise `.finally()`
- Code after `await`
- `queueMicrotask()`
- `MutationObserver`
- Node.js: `process.nextTick()`

Example:

```js
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
```

---

# Macrotask Queue (Task Queue)

Macrotasks execute **only after all Microtasks have been processed**.

Common Macrotasks:

- `setTimeout()`
- `setInterval()`
- DOM events (click, keyboard, etc.)
- UI rendering
- Network/I/O operations
- File operations
- Database operations
- Node.js: `setImmediate()`

Example:

```js
setTimeout(() => {
    console.log("Timeout");
}, 0);
```

Even with a delay of `0`, the callback runs **after** all synchronous code and pending Microtasks.

---

# Execution Priority Example

```js
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Execution:

1. Synchronous code
2. Microtasks
3. Macrotasks

Output:

```text
1
4
3
2
```

---

# Summary

- JavaScript is **single-threaded**.
- Code runs in **Creation Phase** followed by **Execution Phase**.
- Every function call creates a new **Execution Context**.
- The **Call Stack** executes synchronous code.
- Browser **Web APIs** handle asynchronous operations.
- The **Event Loop** moves ready callbacks to the Call Stack.
- **Microtasks always execute before Macrotasks.**