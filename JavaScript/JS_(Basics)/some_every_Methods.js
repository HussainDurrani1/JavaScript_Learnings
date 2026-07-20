// Some & Every Methods in JavaScript:

// Some:
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((num) => {
    return num % 2 === 0;
});
console.log('Has Even Number: ', hasEvenNumber);

// Every:
const allEvenNumbers = numbers.every((num) => {
    return num % 2 === 0;
});
console.log('All Even Numbers: ', allEvenNumbers);


// These two methods return a boolean value based on the condition provided in the callback function.
// The some() method checks if at least one element in the array satisfies the condition,
// while the every() method checks if all elements satisfy the condition.