// BlueTooth: Chrome Developer Tools

// Currying

function add(a, b, c) {
  return a + b + c;
}

console.log(add(2, 3, 4));

// This works fine, but what if these 3 values are coming from 3 different places
// You cannot run the function until all values have arrived
// We don't want to create separate vars and wait for each one and then run the function

function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// addCurried(2)(3)     // Function won't run until all values have arrived. This will just return a funtion

console.log(addCurried(2)(3)(4));
// OR
// const a1 = addCurried(2);
// const a2 = a1(3);
// const a3 = a2(4);
// console.log(a3);

// ====================================================================
// Example:

const sendEmail = (to) => (sub) => (body) =>
  `...\nTo: ${to}\nSubject: ${sub}\nMessage: ${body}\n...`;
console.log(sendEmail("Durrani")("Greet")("Hi, How are you?"));

// OR

const sendTo = sendEmail("Hussain Durrani");
const sendwithSubject = sendTo("Job Posting");
console.log(sendwithSubject("Hi Hussain, there is a new job posting"));
