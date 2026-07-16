// For Each:

const fruits = ["kiwi", "mango", "banana", 'orange', 'grape'];

fruits.forEach((fruit, index) => {
    console.log("For Each Loop Iteration: " + index + " - " + fruit);
});

// It does not return a value, it just executes the provided function for each element in the array.
fruits.forEach((el, idx) => {
    console.log(`Index: ${idx}, Element: ${el.toUpperCase()}`);
    return el.toUpperCase();    // this return value is not used anywhere, it is just for demonstration
});

console.log('\n<=============================================>\n');

// Map:
const months = ["Jan", "Feb", "Mar", "Apr"]
let m1 = months.map((el, idx, arr) => {
    console.log(`Idx: ${idx+1}, Month: ${el}`);
    return el.toUpperCase();    // this return value is used to create a new array
});

console.log('Map\'s Return Value: ', m1, '\n');

let m2 = months.map((el, idx, arr) => {
    console.log(`Idx: ${idx+1}, Month: ${el.toUpperCase()}`);
});

console.log('Map\'s Return Value: ',m2);

console.log('\n<=============================================>\n');

// Filter:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter((num) => {
    // this returns the value if it has a truthy value, so we use a condition
    return num % 2 === 0;   // this return value is used to create a new array of even numbers
});

console.log('Original Array: ', numbers);
console.log('Filter\'s Return Value: ', evenNumbers);

// Filter with objects:
const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];
let adults = users.filter((user) => {
    return user.age >= 18;
});
console.log('Adults: ', adults);

// Filter with just objects
const user = {
    name: "John",
    age: 30,
    city: "New York"
};
let userKeys = Object.keys(user);
let filteredKeys = userKeys.filter((key) => {
    return key !== "age";   // this return value is used to create a new array of keys that are not "age"
});
console.log('Original Object: ', user);
console.log('Filtered Keys: ', filteredKeys);

console.log('\n<=============================================>\n');

// Reduce:
const sum = numbers.reduce((accumulator, currentValue) => {
    // accumulator is the accumulated value, currentValue is the current element being processed in the array
    return accumulator + currentValue;  // this return value is used to accumulate the sum of all numbers in the array
}, 0);

console.log('Original Array: ', numbers);
console.log('Reduce\'s Return Value: ', sum);

// more examples of reduce:
const max = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return Math.max(accumulator, currentValue);
}, -Infinity);  // infinity is used as the initial value so that any number in the array will be greater than it  // can also be 0 in this case

console.log('Max Value: ', max);

// Reduce with objects:
const totalAge = users.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
}, 0);  

console.log('Total Age: ', totalAge);


console.log('\n<=============================================>\n');