// HELPER METHODS

/*
document.write("Hello World");
alert("Hello World");
console.log("Hello World");
*/

// VARIABLES - basic block; classic store, access, modify === value; declare, assignment operator, assign value;
// Undefined != error.

/*let myName = "John Doe"; //Easy to change everything in one place.
console.log(myName);
// console.log(name);
// console.log(name);

let address, zip, state;
address = "100 Main St";
console.log(address);
zip = "12345";
console.log(zip);
state = "FL";
console.log(state);

myName = "Steve Smith";
console.log(myName);

console.log(address, zip, state);*/

// Var names are: case sensitive (fullName != FullName), can't start with number, can't have spaces or hyphens, use camelCase. Can't use reserved keywords (ie. let).

// CONST & VAR - const = constant, var = variable; const = can't be reassigned, var = can be reassigned (old way of creating variables).
//VAR - don't use anymore really - use let and const instead.
/*
const lastName = "Doe";
//lastName = "Smith"; //Can't reassign.
console.log(lastName); //Throws an error.*/

// String concatenation - combining strings together.
// `` - backticks (template strings) easier option.

// const myName = "John";
// const lastName = "Doe";
// let fullName = myName + " " + lastName;

// console.log("Hello your full name is " + fullName);

// const website = "google";
// const url = "https://www." + website + ".com";
// console.log(url);

//NUMBERS --> JS is loosely typed - don't need to specify type of data.
/* let myNumber = 5;
let myDecimal = 5.5;
let myExponential = 123e5;
let myExponential2 = 123e-5;
let myNaN = 0 / 0;
let myInfinity = 1 / 0;


console.log(
    myNumber,
    myDecimal,
    myExponential,
    myExponential2,
    myNaN,
    myInfinity
    ); */

/*  let addition = myDecimal + myExponential;
    let subtraction = myDecimal - myExponential;
    let multiplication = myDecimal * myExponential;
    let division = myDecimal / myExponential;
    
    console.log(addition, subtraction, multiplication, division); */

//Possible to change the data type in the same variable!
/* myNumber = "hello";

console.log(myNumber);
 */

//... A lot of the continuation of this lecture is really too basic to take note of (stuff that really exists in every single programming language and is taught in every 101 course)... I'll skip these futile parts because there's just no point and this is a waste of time rn.
//Instead of being comprehensive, I'll take note of a few things I find interesting/relevant to JS until getting to the more interesting parts of the course.

//IMPLICIT TYPE CONVERSION - JS will automatically convert types for you.
/* const value = 5 + "hello"; //--> Becomes a string: 5hello.
console.log(value); */
//Careful when u get user input for example that you register it well as a number if it is one, if not you'll have a concatenation instead of an addition. Mistakes like these can arise pretty easily.
//7 Primitive JS DT: String, Number, Boolean, Null, Undefined, Symbol (ES6).
//JS has an operator called typeof that allows you to check the type of a variable.
//JS is object oriented - object examples: Array, Date, etc.

//Arrays - [], 0 index based. Can store different data types in the same array.
/* 
//Declaring functions:
function hello() {
  console.log("Hello World");
}

//Calling functions:
hello();
 */

//Parameters & Arguments in JS (mindblowing: same as every other programming language).
// function hello(name) {
//   console.log("Hello " + name);
// }

// hello("John");

//Note: no mandatory return type in JS.
//However, you can return a value ofc.

//Interesting - "Function Expressions" - assigning a function to a variable (can have a name or be "anonymous"):
/* const addition = function (num1, num2) {
  return num1 + num2;
};

myValue = addition(5, 5); */

//So the difference with a normal function is that you can't call it before it's declared (hoisting). Apart from that, it's the same... Arrow functions apparently too.

//OBJECTS - key value pairs. Can have methods within. Dot notation.

/* const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  education: true,
  married: false,
  siblings: ["Jane", "Mark", "Bob"],
  greeting: function () {
    console.log("Hello I'm " + this.firstName + " " + this.lastName);
  },
};
//The very dot notation:
console.log(person.firstName);
console.log(person.siblings[2]);
person.greeting(); */

//Even if perrson is a const, you can still change the values of its properties; add new properties; delete properties. You just can't reassign the variable.
/* person.firstName = "Steve";
console.log(person.firstName); */

//CONDITIONALS - same as every other programming language.
//Equality - double vs triple equal sign. Triple checks for type as well. Double only checks for value. Triple is more strict (like .equals() in Java).

//Conditionals, switch, loops are the same as java/python pretty much.
