/*
    Async/Await & fetch()

    - Promise callbacks (.then(), .catch()) and code after 'await'
      are both placed in the Microtask Queue.
    - Microtasks always execute before Macrotasks
      (setTimeout, setInterval, etc.).
    - Execution order depends on which microtask was queued first,
      NOT on whether it uses await or .then().

    -> How fetch() works:

    1) The browser sends the HTTP request to the server.
       - If the request cannot be sent (network error, no internet, DNS failure),
         the Promise is REJECTED -> .catch() runs.
       - If the server responds (even with 404 or 500),
         the Promise is RESOLVED because a response was received.

    2) Internally, fetch() creates a Promise.
       - Initially its state is "pending".
       - When the request finishes:
           ✔ resolve(response)  -> fulfilled
           ✖ reject(error)      -> rejected
       - The corresponding .then() or .catch() callback is added
         to the Microtask Queue.

    Note:
    - The Promise's internal state/value are private.
    - You cannot directly access them.
    - You only receive the result through:
        • await fetch(...)
        • fetch(...).then(...)
*/

// ! We can use type="module" in your scipt tag in html file, to use await even outside an async function

const getAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        })
        .catch((error) => { console.log(error); })
}

getAllUsers();

async function getUser(id) {
    try {
        // Fetch gives us data in streaming, we have to 'await response.json()' to get the actual response
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        const user = {
            'id: ': data.id, username: data.username, 'Name: ': data.name, 'email: ': data.email,
            'phone: ': data.phone, website: data.website, company: data.company.name, city: data.address.city
        };
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUser(1);

