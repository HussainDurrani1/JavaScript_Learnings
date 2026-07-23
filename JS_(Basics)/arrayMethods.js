// push, pop, shift, unshift, splice, slice, concat, join, indexOf, lastIndexOf, includes, reverse, sort

// 1. push() - adds one or more elements to the end of an array
let fruits = ['apple', 'banana'];
console.log(fruits); // ['apple', 'banana']
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// 2. pop() - removes the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // 'orange'     
console.log(fruits); // ['apple', 'banana']

// 3. shift() - removes the first element from an array
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana']

// 4. unshift() - adds one or more elements to the beginning of an array
fruits.unshift('kiwi');
console.log(fruits); // ['kiwi', 'banana']

// 5. splice() - adds/removes elements from an array
fruits.splice(1, 0, 'mango');
console.log(fruits); // ['kiwi', 'mango', 'banana'] 

// 6. slice() - returns a shallow copy of a portion of an array
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['mango', 'banana']
console.log(fruits); // ['kiwi', 'mango', 'banana']

// 7. concat() - merges two or more arrays
let tropicalFruits = ['pineapple', 'papaya'];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // ['kiwi', 'mango', 'banana', 'pineapple', 'papaya']

// 8. join() - joins all elements of an array into a string
let fruitString = allFruits.join(', ');
console.log(fruitString); // 'kiwi, mango, banana, pineapple, papaya'

// 9. indexOf() - returns the first index of a specified element
let index = allFruits.indexOf('banana');
console.log(index); // 2

// 10. lastIndexOf() - returns the last index of a specified element
allFruits.push('banana');
console.log(allFruits);
let lastIndex = allFruits.lastIndexOf('banana');
console.log(lastIndex); // 2

// 11. includes() - returns true if an array contains a specified element
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
console.log(fruits.includes('Apple'));  // false (because it is case-sensitive)


const numbers = [10, 20, 30, 40];

// Start searching from index 2
console.log(numbers.includes(10, 2)); // false


// 12. reverse() - reverses the order of the elements in an array
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ['papaya', 'pineapple', 'banana', 'mango', 'kiwi']  
reversedFruits = reversedFruits.reverse();
console.log(reversedFruits);

// 13. sort() - sorts the elements of an array
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ['banana', 'kiwi', 'mango', 'papaya', 'pineapple']
let numbers = [3, 1, 4, 2];
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4]

// sort with & without comparator function
let fruits2 = ['banana', 'kiwi', 'mango', 'papaya', 'pineapple'];
let sortedFruits2 = fruits2.sort();
console.log(sortedFruits2); // ['banana', 'kiwi', 'mango', 'papaya', 'pineapple']
let sortedFruits3 = fruits2.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(sortedFruits3); // ['kiwi', 'mango', 'papaya', 'pineapple', 'banana']


// length in multidimensional array
let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr.length); // 3
console.log(arr[0].length); // 2




// ===============================================================


// 14. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flatArr = nestedArr.flat();
console.log(flatArr); // [1, 2, 3, 4, [5, 6]]

let deepFlatArr = nestedArr.flat(2); // or flat(Infinity) for any depth
console.log(deepFlatArr); // [1, 2, 3, 4, 5, 6]

// 15. Array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object.
let str = "hello";
let charArray = Array.from(str);
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

let set = new Set([1, 2, 3, 3, 4]);
let setArray = Array.from(set);
console.log(setArray); // [1, 2, 3, 4]

let map = new Map([['a', 1], ['b', 2]]);
let mapArray = Array.from(map);
console.log(mapArray); // [['a', 1], ['b', 2]]

// Array.from with a mapping function
let numbersString = "12345";
let numbersArray = Array.from(numbersString, Number);
console.log(numbersArray); // [1, 2, 3, 4, 5]

// 16. Array.of() - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
let newArray = Array.of(1, 2, 3, 'a', true);
console.log(newArray); // [1, 2, 3, 'a', true]

let singleElementArray = Array.of(7);
console.log(singleElementArray); // [7]

let emptyArray = Array.of();
console.log(emptyArray); // []

// 17) Array.join
const fruitsJoined = fruits.join('-');
console.log('fruitsJoined: ', fruitsJoined);

// 18) Array.fill
const arrFill = [1, 2, 3, 4, 5];
arrFill.fill(0, 2, 4); // fill with 0 from index 2 up to (but not including) index 4
console.log('arrFill: ', arrFill); // [1, 2, 0, 0, 5]

const arrFill2 = new Array(5).fill('x');
console.log('arrFill2: ', arrFill2); // ['x', 'x', 'x', 'x', 'x']

// 19) Array.copyWithin
const arrCopyWithin = [1, 2, 3, 4, 5];
arrCopyWithin.copyWithin(0, 3); // copy from index 3 to index 0
console.log('arrCopyWithin: ', arrCopyWithin); // [4, 5, 3, 4, 5]

const arrCopyWithin2 = [1, 2, 3, 4, 5];
arrCopyWithin2.copyWithin(2, 0, 2); // copy from index 0 to (but not including) index 2, to index 2
console.log('arrCopyWithin2: ', arrCopyWithin2); // [1, 2, 1, 2, 5]

// 20) Array.find
// The find() method in JavaScript returns the first element in an array
// that satisfies a given testing function.
// If no elements match the condition, it returns undefined
const numbersFind = [5, 12, 8, 130, 44];
const found = numbersFind.find(element => element > 10);
console.log('found: ', found); // 12

// 21) Array.findIndex
const numbersFindIndex = [5, 12, 8, 130, 44];
const indexFound = numbersFindIndex.findIndex(element => element > 10);
console.log('indexFound: ', indexFound); // 1

// 22) Array.findLast
const numbersFindLast = [5, 12, 8, 130, 44];
const foundLast = numbersFindLast.findLast(element => element > 10);
console.log('foundLast: ', foundLast); // 44