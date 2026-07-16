const user = {
    name: 'John Doe',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

console.log(user);

// Object.seal(user);   // This will prevent adding or removing properties, but existing properties can still be modified
Object.freeze(user);    // This will prevent adding, removing, or modifying properties of the object

delete user.age;    //  This will not work when the object is sealed or frozen

console.log(user);

user.friend = 'Jane Smith';    //  This will not work when the object is sealed or frozen

console.log(user);

user.name = 'Hussain Durrani';    //  This will work even when the object is sealed but not when it is frozen

console.log(user);


// Symbol:

const secretKey = Symbol('secret');

let user1 = {
  name: 'Alex',
  [secretKey]: 'Authorized_Session_ID' // Computed property syntax
};

console.log('Symbol Secret is kept hidden: ', Object.keys(user1));
console.log(user1[secretKey]);
console.log(typeof user1[secretKey]);
console.log(typeof [secretKey]);
console.log(typeof secretKey);



// Object.Assign()

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj3 = {d: 5};

const newObj = Object.assign({}, obj1, obj2, obj3);

console.log(newObj);

// --------------------------------------------------------

const user2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    friends: ["Ali", "Ahmed", "Zain"]
};

// Destructuring:
const { firstName, lastName, age, address, friends } = user2;

console.log('firstName: ', firstName);
console.log('lastName: ', lastName);
console.log('age: ', age);
console.log('address: ', address);
console.log('friends: ', friends);

const { street: st, city, country } = address;
const [friend1, friend2, friend3] = friends;

console.log('street: ', st);
console.log('city: ', city);
console.log('country: ', country);
console.log('friend1: ', friend1);
console.log('friend2: ', friend2);
console.log('friend3: ', friend3);

const func = ({age}) => {console.log(`---You age is ${age}---`)};
func(user2);


const marks = [90, 80, 70, 60, [1, 2, 3]];

// Spread Operator:
const [firstMark, secondMark, thirdMark, ...restMarks] = marks;

console.log('firstMark: ', firstMark);
console.log('secondMark: ', secondMark);
console.log('thirdMark: ', thirdMark);
console.log('restMarks: ', restMarks);



// Object Keys, Values and Enteries:
const myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

const keys = Object.keys(myObj);
const values = Object.values(myObj);

console.log('keys: ', keys);
console.log('values: ', values);

const entries = Object.entries(myObj);

console.log('entries: ', entries);

console.log(myObj.hasOwnProperty('a'));
console.log(myObj.hasOwnProperty('e'));

console.log(myObj.toLocaleString());



// API (JSON):

// {   // Wrong way
//     name: "Hussain",
//     age: 2
// }

// This is the is the correct way, even the key should be in a quotation
// {
//     "name": "Hussain",
//     "age": 2,
//     "isAvailable": false
// }


// {JSON Formatter}