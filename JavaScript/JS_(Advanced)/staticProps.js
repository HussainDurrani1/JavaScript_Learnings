// Learn 4 OOP Pillars in JS (like how polymorphism works in js)

class User {
    constructor(username) {
        this.username = username
    }

    greet() {
        console.log(`Hello ${this.username}`);
    }

    // Static Properties and Methods belong to the Class itself
    static createUniqueId() {
        return `123fff${this.username}FFF890 ${Math.random() * 10 + 1}`;
    }

    static isUser() {
        console.log('Yes this is a user...');
    }
}

console.log(User.createUniqueId());
User.isUser();

const user1 = new User('Hussain');
console.log(user1);
console.log(user1.username);
user1.greet();
// console.log(user1.createUniqueId());



class Teacher extends User {
    constructor(username, age) {
        super(username)
        this.age = age
    }
}

const t1 = new Teacher('Junaid', 31)
t1.greet()
// t1.createUniqueId();