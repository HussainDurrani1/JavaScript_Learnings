// Nullish Coalescing Operator '??':

let num = 3 ?? 4;
console.log(num);

num = null ?? 4;
console.log(num);

num = 3 ?? undefined;
console.log(num);

num = null ?? 69 ?? 420;
console.log(num);

const returnNum = (num) => num;

num = returnNum() ?? returnNum(66) ?? returnNum(420);
console.log(num);


// Ternary Operator:
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);

let isMember = true;
let price = isMember ? 10 : 20;
console.log(`Price: $${price}`);

let isAuthenticated = false;
let redirect = isAuthenticated ? "/dashboard" : "/login";
console.log(`Redirecting to: ${redirect}`);

let score = 75;
score >= 90 ? console.log(`Grade: A`) : score >= 80 ? console.log(`Grade: B`) : score >= 70 ? console.log(`Grade: C`) : console.log(`Grade: D`);

