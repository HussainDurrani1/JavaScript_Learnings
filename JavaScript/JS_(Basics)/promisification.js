// Promisification:
// Its a function (transformation), that converts any callack function into a promise

// Old School JS:
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(err);
    document.head.appendChild(script);
}

// Run closure.html for result
loadScript('test.js', (err, script) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Script Loaded...');
    }
})


// =================================

function promisify(fn) {
    return function fn(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}

    const promisifiesLoadScript = promisify(loadScript);

    promisifiesLoadScript('test.js')
        .then(() => console.log('Done!'))
        .catch((err) => console.log('Error ho gya bhai...'));