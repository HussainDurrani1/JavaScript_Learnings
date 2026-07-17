/*
console.log('Before Promise...');
 
const promiseOne = new Promise(function (resolve, reject) {
    // Async Task:
    setTimeout(() => {
        console.log('Async Task is completed.');
        resolve();  // this resolve() actually makes .then() to run.s
    }, 2000);
});
promiseOne.then(function () {   // This runs after the Promise's async task is completed
console.log('Promise consumed...');
})

console.log('After Promise...');
*/

/*
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task 2...');
        resolve({ name: 'Hussain', email: 'MHD@example.com' })
    }, 2000)
}).then(function (user) {
    console.log('Async task 2 is resolved...');
    console.log(user);
}).catch()
*/

/*
new Promise(function (resolve, reject) {
    let error = true;
    setTimeout(function () {
        console.log('Third Prmise...');
        if (error) { reject({ error: '404 error' }) }
        else resolve({ data: 'user data received' })
    }, 1000)
}).then(function (data) {
    console.log('Promise 3 is resolved without Error');
    console.log(data);
}).catch(function (err) {
    console.log('Promise 3 is rejected due to Error...');
    console.log(err);
}).finally(function () {
    console.log('This finally will always run at the end....');
    
})
*/

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// You have to install this first if you are writing the code in .js file, in .html there would be no issue

const chainedPromise = new Promise(function (resolve, reject) {
    const reqURL = 'https://api.github.com/users/HussainDurrani1';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', reqURL);
    xhr.onreadystatechange = function () {
        // console.log(xhr.readyState);
        // console.log('reciving data');
        if (xhr.readyState === 4) {
            // console.log('recived data');
            if (xhr.status === 200) {
                resolve(this.responseText);
            } else {
                reject(`HTTP Error: ${xhr.status} ${xhr.statusText}`);
            }
        }
    }
    xhr.onerror = function () {
        reject('Network connection failed.');
    };
    xhr.send();
})

chainedPromise.then(function (res) {
    let data = JSON.parse(res);
    return { 'username: ': data.login, 'Name: ': data.name, 'followers: ': data.followers, 'Bio: ': data.bio };
}).then(function (userDetails) {
    console.log(userDetails);
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log('Finally we have completed the async request.....');
})