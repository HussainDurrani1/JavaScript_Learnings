class User {
    constructor(username, loginCount) {
        this.username = username;
        this.loginCount = loginCount;
    }

    greet() {
        console.log(`Hello ${this.username}`);
    }
}
// cannot call it without 'new'
const user1 = new User("Ali", 5);

console.log(user1.username); // Ali
user1.greet(); // Hello Ali


// Inheritence using Class:
class Teacher extends User {
    constructor(username, loginCount, salary, officialEmail) {
        // instead of User.call(this, username, loginCount)
        super(username, loginCount)
        this.salary = salary
        this.officialEmail = officialEmail
    }
    addCourse(course) {
        console.log(`New course ${course} added by ${this.username}...`);
    }
}

const teacher1 = new Teacher('Awais', 12, 21000, 'awais@uni.edu.pk')
console.log(teacher1);
teacher1.greet();
teacher1.addCourse('oop')

console.log(teacher1 == Teacher);   // false
console.log(teacher1 === Teacher);   // false
console.log(teacher1 === user1);   // false
console.log(Teacher === User);   // false
console.log(teacher1 instanceof Teacher);   // true
console.log(teacher1 instanceof User);   // true
console.log(user1 instanceof User);   // true
console.log(user1 instanceof Teacher);   // false
// console.log(teacher1 instanceof user1);   // wrong

// Base class
class Person { }

const FlyMixin = (Base) => class extends Base {
    fly() { return "flying"; }
};

const SwimMixin = (Base) => class extends Base {
    swim() { return "swimming"; }
};

// Compose the final class
class Superhero extends FlyMixin(SwimMixin(Person)) { }

const hero = new Superhero();
console.log(hero.fly());  // Works
console.log(hero.swim()); // Works
