// ==========================================
// Iterator, Generator & yield (JS Notes)
// ==========================================



// ==========================================
// ITERATOR
// ==========================================

// An iterator is an object that produces one value at a time.
// It must have a next() method.
// next() always returns:
// { value: ..., done: true/false }

function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextStart = start;      // current value
    let iterationCount = 0;     // tracks iterations

    return {
        next() {
            let result;

            if (iterationCount < end) {
                result = {
                    value: nextStart,
                    done: false
                };

                nextStart += step;
                iterationCount++;

                return result;
            }
            else {
                // Iterator finished
                return {
                    value: iterationCount,
                    done: true
                };
            }
        }
    };
}


// const myIterator = makeIterator(0, 10, 15);

// Calling next() manually

// let result = myIterator.next();

// while (!result.done) {
//     console.log(result.value);
//     result = myIterator.next();
// }


// Same thing using a for loop

// for (let result = myIterator.next(); !result.done; result = myIterator.next()) {
//     console.log(result.value);
// }




// ==========================================
// GENERATOR
// ==========================================

// A generator automatically creates an iterator.
// It is declared using function*.
// yield pauses execution and returns a value.
// The next() call resumes execution after the previous yield.

function* countEven() {
    yield 0;
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}


// const evenCount = countEven();

// Generator objects are iterable,
// so they work directly with for...of.

// for (const count of evenCount) {
//     console.log(count);
// }




// ==========================================
// GENERATOR EXAMPLE (Iterator Replacement)
// ==========================================

// Instead of manually writing next(),
// we simply yield values whenever needed.

function* makeGmyIterator(start, end, stepSize = 1) {

    for (let i = start; i <= end; i += stepSize) {
        yield i;        // pause here and return i
    }

}

const iter = makeGmyIterator(0, 25, 5);

// for...of automatically keeps calling next()

for (const val of iter) {
    console.log(val);
}




// ==========================================
// QUICK REVISION
// ==========================================

/*
Iterator
--------
✔ Object
✔ Has next() method
✔ Returns { value, done }
✔ State managed manually

Generator
---------
✔ Declared with function*
✔ Automatically creates an iterator
✔ Uses yield instead of return
✔ Execution pauses at each yield
✔ Resumes on next()

yield
-----
✔ Returns one value
✔ Pauses function execution
✔ Saves current state
✔ Continues from the same point on next()

for...of
--------
✔ Works directly with generators
✔ Internally calls next() until done becomes true

Iterator vs Generator
---------------------
Iterator:
- Manual implementation
- Must write next() yourself
- More control, more code

Generator:
- Built-in iterator creator
- Uses yield
- Less code
- Easier to read and maintain
*/