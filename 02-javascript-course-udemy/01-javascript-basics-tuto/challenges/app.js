// Challenge 1

// const firstName = "Marc";
// const lastName = "Bretones";
// let address = "main street";

// address = "first street";

// console.log(firstName, lastName, address);

// Challenge 2 - Concatenate Strings
/* 
const street = "main street";
const country = "France";

const fullMailingAddress = street + ", " + country;

console.log(fullMailingAddress);

// 3 - Numbers
let score1 = 45;
let score2 = 50;
let score3 = 60;

const averageScore = (score1 + score2 + score3) / 3;
const totalScore = score1 + score2 + score3;

console.log(averageScore, totalScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;
remainingPlates++;
const message = "There are " + remainingPlates + " plates left.";
console.log(message);
 */

// 4 - Arrays

/* const fruits = ["apple", "orange", "pear", 50];

const firstFruit = fruits[0];
fruits[3] = "grape";

console.log(fruits, firstFruit);
 */

// 5 - Functions
/* 
calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(100, 15);
const order2 = calculateTotal(200, 20);
const order3 = calculateTotal(50, 10);

console.log(order1, order2, order3); */

// 6 - Objects
/* const car = {
  make: "Ford",
  model: "Mustang",
  year: 2020,
  colors: ["red", "blue", "black"],
  hybrid: false,

  drive: function () {
    console.log("Driving...");
  },

  stop: function () {
    console.log("Stopped...");
  },
};

console.log(car.make, car.colors[0]);
car.drive();
car.stop(); */

// 7 - Conditionals

const person1 = {
  firstName: "Marc",
  age: 20,
  status: "resident",
};
const person2 = {
  firstName: "Ginette",
  age: 70,
  status: "tourist",
};

if (age >= 18 && person1.status === "resident") {
  console.log("You are allowed to enter");
} else {
  console.log("You are not allowed to enter");
}
