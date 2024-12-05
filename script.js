// ASSIGNMENT 2
// Last lecture I showed you how to make variables that can hold values of the

// various data types. Make some variables of the following datatypes:

// String, number, boolean, array

// You can choose what the actual content is.

// Try to use both the let and const keywords

let a = 5;
let b = 10;

const cars = ["volvo", "Tesla", "Mercedes"];

let car1 = "volvo";
let isTrue = true;


// ASSIGNMENT 3

// Try out a few of the operators we looked at (+, -, /, *)
// as well as a few of the shorthand operators (++, --, +=, -=)

let c = a * b;
let d = b / a;
let e = (a * b) + d;

console.log(c);
console.log(d);
console.log(e);

let x = 10;
x *= 11;
console.log(x)  // Expected output = 110
let y = 40;
y -= 15;
console.log(y) // Expected output = 25


/* Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 
(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly  */

let userName = "Torjus";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = true;
let goToPage = "";

function checkUserData() {
  if (userName.length !== 0 && userAge >= 18 && userIsBlocked !== false) {
    userIsLoggedIn = true;
    console.log(userIsLoggedIn);

    goToPage = "/home";
    console.log(`Welcome! ${goToPage}`);
  } else {
    console.log("Error! User input is not set correctly");
  }
}

let userdata = checkUserData();
// console.log(userdata);


// ASSIGNMENT 5

// Make a variable called userTitle and set the content equal to "Mr." if userMale 
// is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

// this:
// const variable = statement ? "this if true" : "this if not true"

// Try changing userMale to both true and false and console.log your new variable,
// to see that your conditional is working.


let userTitle = "Mr";
let userMale = true;

let gender = (userMale === true && userTitle === "Mr") ? "Male" : "Female";
console.log(gender)



