const person = {
    hasName: true,
    eats: true,
    has2Legs: true,
    has2Arms: true,
}

const male = {
    worksOut: true,
    doesAJob: true,
    __proto__: person,
}

const developer = {
    lovesToCode: true,
    __proto__: male
}

// developer.__proto__ = person;

// Modern Syntax:
// At once you can only inherit from one object so we would use linear prototypal chaining
// Object.setPrototypeOf(developer, person)
Object.setPrototypeOf(developer, male)
Object.setPrototypeOf(male, person)

console.log(developer.hasName);
console.log(developer.worksOut);



// OR


const canEat = { eat() { return "eating"; } };
const canWalk = { walk() { return "walking"; } };

const personPrototype = {};

// Copy all methods into the prototype
Object.assign(personPrototype, canEat, canWalk);

const person = Object.create(personPrototype);
console.log(person.eat());  // Works
console.log(person.walk()); // Works
