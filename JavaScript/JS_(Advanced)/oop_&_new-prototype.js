// OOP (Object Oriented Programming):

// Every thing in JS is an Object (references to an object) using prototypal inheritence

// Works exactly same as a class class constructor:
function createUser(username, loginCount, isLoggedIn) {
    this.username = username;
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount
    this.introduce = function () {
        console.log(`This is ${username}. I am a student and a Backend Developer.`);
    }
    // works as an object creater, even without return this
    return this;
}

// We can also create function like this:
// This is done because of prototypal inheritence
// Every object looks at its prototypal chain and if it finds a method or attribute there, then it can use it
// So, we are adding this function to it prototype and you would be able to use it.
createUser.prototype.greet = function () {
    // user will know about this if it is created using 'new' keyword
    console.log(`Hello ${this.username}`);
};

// const user1 = createUser('Hussain', 5, true)    // Can be created without 'new', but don't do this
const user2 = new createUser('Durrani', 12, false)
const user3 = new createUser('Hussain', 15, true)

// 'new' keyword makes the object know about the methods or attributes that are created after the function createUser
// and it also creates a new object, without it, users created from createUser would be refrencing to the same object, meaning they would be same.

console.log(user2);
console.log(user3);

user2.greet()   // we can use it without .prototype because of prototypal inheritence.
user2.introduce()

console.log(user2 instanceof createUser);

// user2.introduce();
// user3.introduce();


// These are also constructors:
// new Array
// new Date


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/


// By accessing the top level hierarchy (Object), if inject a function in its prototype, every other object (even arrays etc.) would be able to use it

const myObj = {
    name: 'Hassan',
    age: '18'
}

const myArray = [1, 2, 3, 4, 5]

const myStr = "Hussain Durrani"

Object.prototype.myGlobalFunction = function () {
    console.log(this, '-> This is my Global Function, every one can use it...');
}

myObj.myGlobalFunction();
myArray.myGlobalFunction();
myStr.myGlobalFunction();
'Hahahahahaha'.myGlobalFunction();

// If I inject the function in an array, then all arrays can use it, but objects (its parent in prototypal inheritence) and its other siblings (string..) won't be able to use it


Array.prototype.myArrFunc = function () {
    console.log(this, '-> This is my Array sepecific function, only arrays can use it...');
}

myArray.myArrFunc();    // works fine
// myObj.myArrFunc();      // will give error ('myObj.myArrFunc is not a function')
// myStr.myArrFunc();        // will give error ('myStr.myArrFunc is not a function')