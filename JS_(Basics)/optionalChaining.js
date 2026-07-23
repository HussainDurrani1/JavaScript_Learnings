let user = {
    name: 'John Doe',
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

console.log('user -> ', user);

console.log('\nuser.address?.street -> ', user.address?.street); // Optional chaining to access street property

console.log('user.greet() => ', user.greet()); // Calling the greet method of the user object

delete user.greet;
console.log('user.greet?.() => ', user.greet?.());
// console.log('user.greet() => ', user.greet()); // this will throw an error because greet is undefined after deletions


console.log('user.address?.zipcode -> ', user.address?.zipcode); // Optional chaining to access zipcode property (which doesn't exist)

delete user.address; // Deleting the address property from the user object

console.log('\nAfter Deleting Adreess...\nuser -> ', user);
console.log('user.address?.street -> ', user.address?.street); // Optional chaining to access zipcode property (which doesn't exist)

// console.log('user.address.street -> ', user.address.street); // This will throw an error because address is undefined after deletion

console.log('user?.[\'name\'] -> ', user?.['name']); // Optional chaining to access name property

user = null; 

console.log('user?.greet?.() => ', user?.greet?.());
// console.log('user?.greet() => ', user.greet());  // This will throw an error because user is null after deletion

console.log('\nAfter Deleting the user object...\nuser -> ', user);

console.log('user?.[\'name\'] -> ', user?.['name']); // Optional chaining to access name property

// console.log('user.name -> ', user.name);    // This will throw an error because user is null after deletion
