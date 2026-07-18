// console.log(Math.PI);
// Math.PI = 1234;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


const chai = {
    name: "masala chai",
    price: 300,
    isAvailable: 'yes',

    isReady() {
        console.log('Yes CHai is ready..');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'isReady', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const key in chai) {
    console.log(`${key}: ${chai[key]}`);
}