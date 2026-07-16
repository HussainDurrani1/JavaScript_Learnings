const user1 = {
    firstName: "Hussain",
    lastName: "Durrani",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    friends: ["Ali", "Ahmed", "Zain"]
};

let user2 = user1; // Shallow copy, both variables point to the same object

console.log('After Shallow copy: ');

console.log('user1.firstName: ', user1.firstName); 
console.log('user2.firstName: ', user2.firstName); 

user2.firstName = "Ali"; // Modifying user2 also affects user1

console.log('After Update in Shallow copy: ');

console.log('user1.firstName: ', user1.firstName); // Output: "Ali"
console.log('user2.firstName: ', user2.firstName); // Output: "Ali"

console.log('user1 === user2: ', user1 === user2); // Output: true (both variables point to the same object)

user2  = {};
Object.assign(user2, user1); // Deep copy using Object.assign

user2.firstName = "Ahmed"; // Modifying user2 does not affect user1 
    
console.log('After Deep copy: '); 
console.log('user1.firstName: ', user1.firstName); // Output: "Ali"
console.log('user2.firstName: ', user2.firstName); // Output: "Ahmed"

console.log('user1 === user2: ', user1 === user2); // Output: false (user2 is a new object)

user2 = JSON.parse(JSON.stringify(user1)); // Deep copy using JSON methods

user2.firstName = "Zain"; // Modifying user2 does not affect user1
    
console.log('After Deep copy with JSON methods: ');
console.log('user1.firstName: ', user1.firstName); // Output: "Ali"
console.log('user2.firstName: ', user2.firstName); // Output: "Zain"

console.log('user1 === user2: ', user1 === user2); // Output: false (user2 is a new object)

user2 = {};

// This is only a shallow copy, nested objects are still referenced
// Meaning this is only level 1 deep copy, but level 2 and beyond are still shallow copies
user2 = { ...user1 }; // Deep copy using spread operator

user2.firstName = "Omar"; // Modifying user2 does not affect user1

console.log('After Deep copy with spread operator: ');  
console.log('user1.firstName: ', user1.firstName); // Output: "Ali"
console.log('user2.firstName: ', user2.firstName); // Output: "Omar"

console.log('user1 === user2: ', user1 === user2); // Output: false (user2 is a new object)

user2 = Object.assign({}, user1); // Deep copy using Object.assign

user2.firstName = "Bilal"; // Modifying user2 does not affect user1
    
console.log('After Deep copy with Object.assign: ');
console.log('user1.firstName: ', user1.firstName); // Output: "Ali"
console.log('user2.firstName: ', user2.firstName); // Output: "Bilal"    

console.log('user1 === user2: ', user1 === user2); // Output: false (user2 is a new object)



// Now similarly for arrays

const arr1 = [1, 2, 3, 4, 5, [arr2 = [6, 7, 8]]]; // Nested array   
let arr2 = arr1; // Shallow copy, both variables point to the same array

console.log('After Shallow copy: ');
console.log('arr1: ', arr1); 
console.log('arr2: ', arr2);

arr2[0] = 10; // Modifying arr2 also affects arr1

console.log('After Update in Shallow copy: ');
console.log('arr1: ', arr1); // Output: [10, 2, 3, 4, 5]
console.log('arr2: ', arr2); // Output: [10, 2, 3, 4, 5]

console.log('arr1 === arr2: ', arr1 === arr2); // Output: true (both variables point to the same array)

arr2  = [];
Object.assign(arr2, arr1); // Deep copy using Object.assign

arr2[0] = 20; // Modifying arr2 does not affect arr1

console.log('After Deep copy: '); 
console.log('arr1: ', arr1);
console.log('arr2: ', arr2); // Output: [20, 2, 3, 4, 5]
console.log('arr1 === arr2: ', arr1 === arr2); // Output: false (arr2 is a new array)

// This is only a shallow copy, nested objects are still referenced
// Meaning this is only level 1 deep copy, but level 2 and beyond are still shallow copies
arr2 = [...arr1]; // Deep copy using spread operator

arr2[0] = 30; // Modifying arr2 does not affect arr1

console.log('After Deep copy with spread operator: ');
console.log('arr1: ', arr1); // Output: [10, 2, 3, 4, 5]
console.log('arr2: ', arr2); // Output: [30, 2, 3, 4, 5]
console.log('arr1 === arr2: ', arr1 === arr2); // Output: false (arr2 is a new array)

arr2 = JSON.parse(JSON.stringify(arr1)); // Deep copy using JSON methods

arr2[0] = 40; // Modifying arr2 does not affect arr1

console.log('After Deep copy with JSON methods: ');
console.log('arr1: ', arr1); // Output: [10, 2, 3, 4, 5]
console.log('arr2: ', arr2); // Output: [40, 2, 3, 4, 5]
console.log('arr1 === arr2: ', arr1 === arr2); // Output: false (arr2 is a new array)