// Call Back Hell:
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

import * as xmlhttprequestPkg from 'xmlhttprequest';
const { XMLHttpRequest } = xmlhttprequestPkg;

const usersURL = 'https://dummyjson.com/users';
const postsURL = 'https://dummyjson.com/posts/user/';



function makeXMLRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.responseText)
        callback(data)
    })

    xhr.onerror = function () {
        console.log('ERROR, something went wrong...');
    };
    xhr.send()
}

// This is Call Back Hell:
makeXMLRequest(usersURL, (allUsersData) => {
    makeXMLRequest(`${usersURL}/${allUsersData.users[22].id}`, (userData) => {
        makeXMLRequest(`${postsURL}/${userData.id}`, (postData) => {
            makeXMLRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`, (cmtsData) => {
                makeXMLRequest(`${usersURL}/${cmtsData.comments[0].user.id}`, (commenterData) => {
                    console.log('commenter ID: ', commenterData.id);
                    console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
                    console.log('Commenter\'s age: ', commenterData.age);
                })
            })
        })
    })
})


// xhr.open('GET', 'https://dummyjson.com/users', false);   // to make it synchronous

/*
makeXMLRequest(usersURL, (allUsersData) => {
    console.log('First User from all Users: \n');
    console.log('id: ', allUsersData.users[0].id);
    console.log('Full Name: ', allUsersData.users[0].firstName, allUsersData.users[0].lastName);
    console.log('age: ', allUsersData.users[0].age, '\n\n\n');
    makeXMLRequest(`${usersURL}/${allUsersData.users[22].id}`, (userData) => {
        console.log('23rd User\'s Data: \n');
        console.log('id: ', userData.id);
        console.log('FullName: ', userData.firstName, userData.lastName);
        console.log('age', userData.age, '\n\n\n');
        makeXMLRequest(`${postsURL}/${userData.id}`, (postData) => {
            console.log('Post Data: \n', postData.posts[0].id, postData, '\n\n\n');
            makeXMLRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`, (cmtsData) => {
                console.log('CommentsData: \n', (cmtsData.comments), '\n\n\n');
                makeXMLRequest(`${usersURL}/${cmtsData.comments[0].user.id}`, (commenterData) => {
                    console.log('commenter: ', commenterData, '\n\n\n');
                })
            })
        })
    })
})
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// With using Promises and XML:

/*

function makePromisifiedXMLRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText)
                    resolve(data)
                } else {
                    reject(`HTTP Error: ${xhr.status} ${xhr.statusText}`);
                }
            }
        }

        xhr.onerror = function () {
            reject('Network connection failed.');
        };
        xhr.send()
    })
}

makePromisifiedXMLRequest(usersURL)
    .then((allUsersData) => {
        return makePromisifiedXMLRequest(`${usersURL}/${allUsersData.users[22].id}`)
    })
    .then((userData) => {
        return makePromisifiedXMLRequest(`${postsURL}/${userData.id}`)
    })
    .then((postData) => {
        return makePromisifiedXMLRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`)
    })
    .then((cmtsData) => {
        return makePromisifiedXMLRequest(`${usersURL}/${cmtsData.comments[0].user.id}`)
    })
    .then((commenterData) => {
        console.log('commenter ID: ', commenterData.id);
        console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
        console.log('Commenter\'s age: ', commenterData.age);
    })
    .catch((err) => {
        console.log(err);
    })

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// With using Promises and Fetch:

/*

// Fetch also returns a promise
function makePromisifiedFetchRequest(url) {
    return fetch(url).then((data) => data.json())
}

makePromisifiedFetchRequest(usersURL)
.then((allUsersData) => {
        return makePromisifiedFetchRequest(`${usersURL}/${allUsersData.users[22].id}`)
    })
    .then((userData) => {
        return makePromisifiedFetchRequest(`${postsURL}/${userData.id}`)
    })
    .then((postData) => {
        return makePromisifiedFetchRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`)
    })
    .then((cmtsData) => {
        return makePromisifiedFetchRequest(`${usersURL}/${cmtsData.comments[0].user.id}`)
    })
    .then((commenterData) => {
        console.log('commenter ID: ', commenterData.id);
        console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
        console.log('Commenter\'s age: ', commenterData.age);
    })
    .catch((err) => {
        console.log(err);
    })

*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// With using Async funtion and Fetch .then .catch:

/*

// Async function also returns a promise
async function makeAsyncFetchRequest(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

makeAsyncXMLRequest(usersURL)
.then((allUsersData) => {
    return makeAsyncXMLRequest(`${usersURL}/${allUsersData.users[22].id}`)
    })
    .then((userData) => {
        return makeAsyncXMLRequest(`${postsURL}/${userData.id}`)
    })
    .then((postData) => {
        return makeAsyncXMLRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`)
    })
    .then((cmtsData) => {
        return makeAsyncXMLRequest(`${usersURL}/${cmtsData.comments[0].user.id}`)
    })
    .then((commenterData) => {
        console.log('commenter ID: ', commenterData.id);
        console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
        console.log('Commenter\'s age: ', commenterData.age);
    })
    .catch((err) => {
        console.log(err);
    })

*/



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// With using Async await and Fetch:

/*

async function makeAsyncAwaitFetchRequest(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const allUsersData = await makeAsyncAwaitFetchRequest(usersURL)
const userData = await makeAsyncAwaitFetchRequest(`${usersURL}/${allUsersData.users[22].id}`)
const postData = await makeAsyncAwaitFetchRequest(`${postsURL}/${userData.id}`)
const cmtsData = await makeAsyncAwaitFetchRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`)
const commenterData = await makeAsyncAwaitFetchRequest(`${usersURL}/${cmtsData.comments[0].user.id}`)
console.log('commenter ID: ', commenterData.id);
console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
console.log('Commenter\'s age: ', commenterData.age);

*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// With using Async Await and XML:

/*

import * as xmlhttprequestPkg from 'xmlhttprequest';
const { XMLHttpRequest } = xmlhttprequestPkg;

async function makePromisifiedAsyncXMLRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText)
                    resolve(data)
                } else {
                    reject(`HTTP Error: ${xhr.status} ${xhr.statusText}`);
                }
            }
        }

        xhr.onerror = function () {
            reject('Network connection failed.');
        };
        xhr.send()
    })
}

const allUsersData = await makePromisifiedAsyncXMLRequest(usersURL)
const userData = await makePromisifiedAsyncXMLRequest(`${usersURL}/${allUsersData.users[22].id}`)
const postData = await makePromisifiedAsyncXMLRequest(`${postsURL}/${userData.id}`)
const cmtsData = await makePromisifiedAsyncXMLRequest(`https://dummyjson.com/posts/${postData.posts[0].id}/comments`)
const commenterData = await makePromisifiedAsyncXMLRequest(`${usersURL}/${cmtsData.comments[0].user.id}`)
console.log('commenter ID: ', commenterData.id);
console.log('commenters Name: ', commenterData.firstName, commenterData.lastName);
console.log('Commenter\'s age: ', commenterData.age);

*/
