const randomVal = Math.random();

// console.log(randomVal);

// console.log(Math.round(randomVal * 10)); // random number between 0 and 10

let min = 18;
let max = 35;

let randomInt = Math.floor(Math.random() * (max - min + 1)) + min; // random int between min and max, INCLUSIVE
console.log(randomInt);
