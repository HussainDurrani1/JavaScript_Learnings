// Promisification:
// Its a function (transformation), that converts any callack function into a promise

// Old School JS:

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (error) => callback(new Error("Unknown Error!"), script);
    document.head.appendChild(script);
}

// Run closure.html for result
// loadScript('test.js', (err, script) => {
//     if (err) {
//         console.log('Error ho gya hai...');
//         console.log(err);
//     } else {
//         console.log('Script Loaded...');
//     }
// })


// =================================

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    }
}

const promisifiedLoadScript = promisify(loadScript);

// promisifiedLoadScript('test.js')
//     .then(() => console.log('Done!'))
//     .catch((err) => console.log(err, 'Error ho gya bhai...'));


(async () => {
    try {
        const result = await promisifiedLoadScript('test.js')
        console.log('Done...');
    } catch (error) {
        console.log('Error ho gya...');
        console.log(error);
    }
})();