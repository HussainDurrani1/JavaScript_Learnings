// 'For Of' and 'For In' & 'For', 'While', 'Do While' Loops

// For Of: It is for iterable objects like arrays, strings, maps, sets, etc. It iterates over the values of the iterable object.
// For In: It is for objects. It iterates over the keys of the object.


// For Of Loop
const fruits = ["kiwi", "mango", "banana"];
for (const fruit of fruits) {
    console.log("For Of Loop Iteration: " + fruit);
}

// Examples

const personKeys = Object.keys(person);
for (const key of personKeys) {
    console.log("For Of Loop with Object.keys() Iteration: " + key + " - " + person[key]);
}

const personValues = Object.values(person);
for (const value of personValues) {
    console.log("For Of Loop with Object.values() Iteration: " + value);
}

const personEntries = Object.entries(person); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ]
for (const [key, value] of personEntries) {
    console.log("For Of Loop with Object.entries() Iteration: " + key + " - " + value);
}

// for of loop with array destructuring
const numbers = [1, 2, 3, 4, 5];
for (const [index, number] of numbers.entries()) {
    console.log("For Of Loop with Array Destructuring Iteration: " + index + " - " + number);
}

// for of loop with object destructuring
const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];
for (const { name, age } of users) {
    console.log("For Of Loop with Object Destructuring Iteration: " + name + " - " + age);
}

// for of loop with nested array destructuring
const nestedArray = [[1, 2], [3, 4], [5, 6]];
for (const [a, b] of nestedArray) {
    console.log("For Of Loop with Nested Array Destructuring Iteration: " + a + " - " + b);
}

// for of loop with nested object destructuring
const nestedObject = {
    user1: { name: "John", age: 30 },
    user2: { name: "Jane", age: 25 },
    user3: { name: "Bob", age: 35 } 
};
for (const { name, age } of Object.values(nestedObject)) {
    console.log("For Of Loop with Nested Object Destructuring Iteration: " + name + " - " + age);
}

// for of loop with string destructuring
const str = "Hello";
for (const char of str) {
    console.log("For Of Loop with String Destructuring Iteration: " + char);
}

// for of loop with map destructuring
const map = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
]); 

for (const [key, value] of map) {
    console.log("For Of Loop with Map Destructuring Iteration: " + key + " - " + value);
}

// --------------------------------------------------------------

// For In Loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};  
for (const key in person) {
    console.log("For In Loop Iteration: " + key + " - " + person[key]);
}

// Examples

const personKeys2 = Object.keys(person);
for (const key in personKeys2) {
    console.log("For In Loop with Object.keys() Iteration: " + key + " - " + person[key]);
}

const personValues2 = Object.values(person);
for (const value in personValues2) {
    console.log("For In Loop with Object.values() Iteration: " + value);
}

const personEntries2 = Object.entries(person);

for (const [key, value] in personEntries2) {
    console.log("For In Loop with Object.entries() Iteration: " + key + " - " + value);
}

// for in loop with nested object destructuring
const nestedObject2 = {
    user1: { name: "John", age: 30 },
    user2: { name: "Jane", age: 25 },
    user3: { name: "Bob", age: 35 } 
};
for (const key in nestedObject2) {
    const { name, age } = nestedObject2[key];
    console.log("For In Loop with Nested Object Destructuring Iteration: " + name + " - " + age);
}   

// for in loop with nested array destructuring
const nestedArray2 = [[1, 2], [3, 4], [5, 6]];
for (const [a, b] in nestedArray2) {
    console.log("For In Loop with Nested Array Destructuring Iteration: " + a + " - " + b);
}

// --------------------------------------------------------------

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " + i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log("While Loop Iteration: " + count);
    count++;
}

// Do While loop
let count2 = 0;
do {
    console.log("Do While Loop Iteration: " + count2);
    count2++;
} while (count2 < 5);