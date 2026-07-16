// push, pop, shift, unshift, splice, slice, concat, join, indexOf, lastIndexOf, includes, reverse, sort

// example of each method

// Do => .JOIN()
// Do => .FLAT(Infinity)
// Do => .FROM()
// Do => .OF()


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
let hasMango = allFruits.includes('mango');
console.log(hasMango); // true

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