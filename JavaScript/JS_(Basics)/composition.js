// ==================================================

/*
====================================
Function Composition
====================================

Composition = output of one function
becomes input of the next function.
*/

// ---------- Basic Functions ----------

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const square = (x) => x * x;

// ---------- Compose Two Functions ----------

// Returns a new function: fn2(fn1(a, b))
const compose2Funcs = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const addThenSquare = compose2Funcs(add, square);
const mulThenSquare = compose2Funcs(mul, square);

console.log(addThenSquare(2, 3)); // 25
console.log(mulThenSquare(2, 3)); // 36

// ====================================
// Compose Multiple Functions
// ====================================

// First function receives an array of values.
const addArray = ([a, b]) => a + b;
const mulArray = ([a, b]) => a * b;

// Remaining functions receive ONE value.
const squareValue = (x) => x * x;
const addTwo = (x) => x + 2;

// (...fns) -> stores functions
// (...vals) -> stores input values
const composeAll =
    (...fns) =>
    (...vals) =>
        fns.reduce(
            (result, fn) => fn(result),
            vals
        );

const task1 = composeAll(addArray, squareValue);
const task2 = composeAll(mulArray, squareValue, addTwo);

console.log(task1(2, 3)); // 25
console.log(task2(2, 3)); // 38

/*
    Functions that accept 2 arguments cannot be passed to composeAll at once
    Like add(a, b) & mul(a, b)

    Because due to Currying only the first function can accept 2 args
    Other Functions would get its result, which would be just one value

    And also make sure to pass funcs with 2 args first in the composeAll() func
*/