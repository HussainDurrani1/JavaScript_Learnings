const user1 = {
    name: 'John Doe',
    age: 30,
    greet: () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
user1.greet();


const user = {
  name: "Bob",
  showName() { console.log(this.name); }
};

user.showName();

const brokenCall = user.showName;
brokenCall(); // ❌ undefined (invoked without an object reference)


const fixedCall = user.showName.bind(user);
fixedCall(); //  "Bob"



function hey(){
    const name = 'Hussain';
    console.log(this.name);
}
hey()   

function helloo(){
    console.log(this);
}
helloo()   

const hey1 = function(){
    const name = 'Hussain';
    console.log(this.name);
}
hey1()

const helloo1 = function(){
    console.log(this);
}
helloo1()

// Arrow Functions:
const hey2 = () => {
    const name = 'Hussain';
    console.log(this.name);
}
hey2()

const helloo2 = () => {
    console.log(this);
}
helloo2()


const add = (n1, n2) => n1+n2;
console.log(add(2, 3));

const sub = (n1, n2) => {return n1-n2};
console.log(sub(5, 3));

// Returning an Object:
const giveObject = () => ({name: 'Hussain', age: 2});
console.log(giveObject());



// IIFE [Immediately Invoked Function Execution]: 
// (Are used to remove the polution of the global scope)
// Further Explanation of IIFE in text for notes:

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It's a design pattern which is also known as a Self-Executing Anonymous Function.
// The primary reason to use an IIFE is to create a private scope for variables and functions,
// thereby preventing them from polluting the global scope.

// Benefits of IIFE:
// 1. Avoids polluting the global scope: Variables and functions declared inside an IIFE are not accessible from the outside,
//    which helps in preventing naming conflicts and keeps the global scope clean.
// 2. Creates private scope: It allows you to create a private scope for your code, similar to how classes create private members.
// 3. Encapsulation: It helps in encapsulating code, making it more modular and easier to manage.
// 4. Data Privacy: Variables inside an IIFE are not directly accessible from outside, providing a form of data privacy.

// Example:

// (function greetMe(){
//     console.log(`Hello there!`);
// })()     // This will give error, because you need to end it with a semi-colon

(function greetMe(){
    console.log(`Hello there!`);
})();

(() => {
    let privateVar = "I am private";
    console.log(privateVar); // Accessible within the IIFE
})();

// console.log(privateVar); // ReferenceError: privateVar is not defined (not accessible from global scope)

// IIFEs can also accept arguments:


((name) => {
    console.log(`Hello, ${name}!`);
})('World');

// They can also return values, though this is less common for their primary use case:
const result = (() => {
    let x = 10;
    let y = 20;
    return x + y;
})();
console.log('IIFE returned value:', result); // Output: IIFE returned value: 30