function setName(username) {
    this.username = username
    console.log('User name setted...');
}

function createUser(username, email, password) {
    // None of the following function calls would work because as they are completely runned,
    // they are taken out of the execution context, so all the memory (variables) in it would again set to be undefined.
    // setName(this.username)
    // new setName(this.username)
    // this.username = new setName(this.username)


    // If give that function our own this, then it would bind the variable to our this, 
    // in this way, we don't lose the data.
    // Mandatory to use .call() in this case (to actually call the function by also giving your this in param).
    setName.call(this, username)

    this.email = email
    this.password = password
    // return this
}

const user1 = new createUser('hussain_617', 'hussain@example.com', '121212')

console.log(user1);
console.log(user1.username);
console.log(user1.email);
console.log(user1.password);