// Function is called before it is declared
greet(); // Output: "Hello, World!"

function greet() {
  console.log("Hello, World!");
}




// sayHi(); // Throws TypeError: sayHi is not a function

const sayHi = function () {
  console.log("Hi!");
};



// sayHello(); // Throws TypeError: sayHello is not a function
const sayHello = () => console.log('Hello, World!');

sayHello(); // Output: "Hello, World!"


// Explain Hoisting:
/*
    Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code.

    There are two types of hoisting:

    1. Variable Hoisting:
        - Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
        - Variables declared with `let` and `const` are also hoisted, but they are not initialized. They are in a "temporal dead zone" until their declaration is encountered in the code. Accessing them before their declaration will result in a `ReferenceError`.

    2. Function Hoisting:
        - Function declarations are hoisted to the top of their scope, meaning you can call them before they are defined.
        - Function expressions (assigned to a variable) are treated like variable hoisting. If declared with `var`, the variable is hoisted and initialized to `undefined`, leading to a `TypeError` if called before assignment. If declared with `let` or `const`, they are in the temporal dead zone.

    Key Points:
    - Only declarations are hoisted, not initializations.
    - `var` variables are initialized to `undefined` when hoisted.
    - `let` and `const` variables are hoisted but remain uninitialized (temporal dead zone).
    - Function declarations are fully hoisted (both declaration and definition).
    - Function expressions follow variable hoisting rules.
*/

// Example of var hoisting
console.log(varVariable); // Output: undefined
var varVariable = "I am a var";
console.log(varVariable); // Output: "I am a var"

// Example of let hoisting (temporal dead zone)
// console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = "I am a let";
console.log(letVariable); // Output: "I am a let"

// Example of const hoisting (temporal dead zone)
// console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
const constVariable = "I am a const";
console.log(constVariable); // Output: "I am a const"

// Example of function declaration hoisting
hoistedFunction(); // Output: "This function is hoisted!"

function hoistedFunction() {
  console.log("This function is hoisted!");
}