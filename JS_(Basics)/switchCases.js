// Switch Cases: 
const day = new Date().getDay(); // Get the current day (0-6, where 0 is Sunday)

switch (day) {
    case 0:
        console.log("It's Sunday!");
        break;
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    default:
        console.log("Invalid day.");
}

// Example with multiple cases for the same action
const fruit = "apple";

switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
        console.log("This is a common fruit.");
        break;
    case "mango":
    case "pineapple":
        console.log("This is a tropical fruit.");
        break;
    default:
        console.log("This fruit is not recognized.");
}

// Example with fall-through (be careful with this)
const grade = 'B';

switch (grade) {
    case 'A':
        console.log("Excellent!");
    case 'B':
        console.log("Very Good!"); // This will execute because there's no break in 'A'
    case 'C':
        console.log("Good!"); // This will also execute
        break; // This break stops the fall-through
    case 'D':
        console.log("Pass.");
        break;
    case 'F':
        console.log("Fail.");
        break;
    default:
        console.log("Invalid grade.");
}