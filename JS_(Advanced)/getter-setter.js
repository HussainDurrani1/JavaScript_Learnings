class User {
    #password = '';
    constructor(name, username, password) {
        this.name = name
        this._username = username
        this.#password = password
    }

    // Getter and Setter both should be created (if the value is not private, or protected)

    get password() {
        return `123${this.#password.toUpperCase()}abc`
    }

    set password(pass) {
        this.#password = pass
    }

    get username() {
        return this._username.toUpperCase()
    }

    set username(userN) {
        this._username = userN
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(nom) {
        this._name = nom;
    }
}

const user1 = new User("Durrani", 'durrani_617', 'abc123')

console.log(user1);

console.log('PASSWORD: ', user1.password);
user1.password = 'durrani123'
console.log('PASSWORD: ', user1.password);

console.log('USERNAME: ', user1.username);
user1.username = 'hussain___617'
console.log('USERNAME: ', user1.username);

console.log('NAME: ', user1.name);
user1.name = 'Ali'
console.log('NAME: ', user1.name);



// =========================================================

// Old way:
/*

function Users(email, username) {
    this._email = email
    this._username = username

    Object.defineProperty(this, 'email', {
        get: function () {
            return `...${this._email.toUpperCase()}???`;
        },
        set: function (em) {
            this._email = em
        }
    })

    Object.defineProperty(this, 'username', {
        get: function () {
            return `...${this._username.toUpperCase()}???`;
        },
        set: function (u) {
            this._username = u
        }
    })
}

const oldUser = new Users('hello@hello.com', 'hello')
console.log(oldUser.email);
console.log(oldUser.username);
oldUser.email = 'asdfghj'
oldUser.username = '124erfdsgdl'
console.log(oldUser.email);
console.log(oldUser.username);

*/



// =========================================================

// Object way:
/*
const myUser = {
    _email: 'hd@hello.com',
    _username: 'hd_hello',

    get email() {
        return `aaa${this._email}123`
    },
    
    set email(em) {
        this._email = em
    },

    get username() {
        return this._username;
    }
}

console.log(myUser);
console.log(myUser.username);
console.log(myUser.email);
myUser.email = 'mhd@google.com'
console.log(myUser.email);
*/