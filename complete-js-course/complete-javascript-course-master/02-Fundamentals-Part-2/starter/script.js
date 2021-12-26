"use strict";
/////////////////////////////////FUNCTIONS/////////////////////////////////

// function logger() {
//   console.log("hello there");
// }

// logger();
// logger();

// function foodProcessor(input1, input2) {
//   console.log(input1, input2);
//   const juice = `Juice with ${input1} apples and ${input2} orange`;
//   return juice;
// }

// //ALWAYS store the return values of functions in variablles, otherwise they don't go anywhere
// const appleJuice = foodProcessor(7, 2);
// console.log(appleJuice);

/////////////////////////////////FUNCTION DECLARATION & FUNCTION EXPRESSION(ANONYMOUS)/////////////////////////////////

//function DECLARATION
//can be called before being declared in code
// function calcAge(birthYear) {
//   return 2021 - birthYear;
// }

// const age1 = calcAge(1998);

//function EXPRESSION(anonymous)
// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// const age2 = calcAge2(1998);

// console.log(age1, age2);

/////////////////////////////////ARROW FUNCTIONS/////////////////////////////////

//EXPRESSION
const calcAge3 = function (birthYear) {
  return 2021 - birthYear;
};

//ARROW
const calcAge4 = (birthYear) => 2021 - birthYear;

const arrow = calcAge4(1998);
console.log(arrow); //23

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} can retire in ${retirement} years`;
};

console.log(yearsUntilRetirement("Daniel", 1998));
console.log(yearsUntilRetirement("Kata", 2003));

/////////////////////////////////FUNCTIONS INSIDE FUNCTIONS/////////////////////////////////
function cutSmallPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutSmallPieces(apples); //apples * 4 = 3 * 4 = 12
  const orangePieces = cutSmallPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(foodProcessor(3, 5));

/////////////////////////////////ARRAYS/////////////////////////////////

//one way to declare an array
// const friends = ["Lilly", "James", "Harry"];

// //other way to declare an array
// const year = new Array(1991, 1992, 1993);

// //0-index based
// console.log(friends[1]);

// //logs the last one, bc "leght" is not 0-index based
// console.log(friends[friends.length - 1]);

// //even though we declared the array with const, we can still change it bc only 'primitive' values are immutable, arrays are not 'primitive'
// friends[2] = "Ron";

// const firstName = "Hermione";
// //we can store variables and results of calculations, and even other arrays
// const hermione = [firstName, "Greinjer", 2023 - 1994, " student", friends];
// console.log(hermione);

// //exercise
// const calcAge5 = (year) => 2021 - year;

// const years = [1991, 1987, 1966, 1959];

// const age1 = calcAge5(years[0]); //1991
// const age2 = calcAge5(years[1]); //1987
// const age3 = calcAge5(years[years.length - 1]); // 1959
// console.log(age1, age2, age3);

// //you can place function calls into an array as well
// const ages = [
//   calcAge5(years[0]),
//   calcAge5(years[1]),
//   calcAge5(years[years.length - 1]),
// ];
// console.log(ages);

/////////////////////////////////ARRAY METHODS/////////////////////////////////

const friends = ["Lilly", "James", "Harry"];

//ADDING
friends.push("Dubmledore"); //pushes it to the end of the array

friends.unshift("Draco"); //adds it the the begining of the array

//REMOVING
friends.pop(); //removes the last item of the array (no arguments required)/ it also returns the popped item
friends.shift(); // removes the first item/and also returns it

//LOCATION
console.log(friends.indexOf("Lilly")); //0
console.log(friends.indexOf("Dumbledore")); // -1 (not included)

console.log(friends.includes("Harry")); //returns a boolean (t/f)

if (friends.includes("Lilly")) {
  console.log(`You have a friend called Lilly`);
}

/////////////////////////////////OBJECTS/////////////////////////////////

//object literal syntax
const jonas = {
  //key-value
  firstName: "Hermione", //proerty fristName with a value of "Hermione"
  lastName: "Greinger",
  age: 2021 - 1993,
  job: "teacher",
  friends: ["Harry", "Ron", "Dumbledore"],
};

/////////////////////////////////OBJECTS BRACKET AND DOT NOTATION/////////////////////////////////
const hogwarts = {
  firstName: "Albus",
  lastName: "Dumbledore",
  age: 2021 - 1993,
  job: "teacher",
  friends: ["Harry", "Ron", "Snape"],
};

//dot-notation
console.log(hogwarts.lastName);

//bracket-notation
console.log(hogwarts["lastName"]);

//with expressions - only works with bracket-notation
let nameKey = "Name";
console.log(hogwarts["first" + nameKey]); //Albus
console.log(hogwarts["last" + nameKey]); //Dubledore

//with user-imput
// let choice = prompt(
//   "What do you want to know about hogwarts? Choose between firstName, lastName, age, job, friends?"
// );
//if you try to access a non-existant property you get undefined
// console.log(hogwarts[choice]);

//adding to an object
hogwarts.location = "Warner Brothers"; //creates locations and sets it
hogwarts["train"] = "platform9&3/4";

console.log(
  `${hogwarts.firstName} has ${hogwarts.friends.length} friends, and his best friends is ${hogwarts.friends[2]}`
);

/////////////////////////////////OBJECTS METHODS (FUNCTIONS INSIDE OBJECTS)/////////////////////////////////

const snape = {
  firstName: "Snape",
  lastName: "Severos",
  birthYear: 1991,
  job: "teacher",
  friends: ["Harry", "Ron", "Draco"], //array value
  hasDriversLicence: false, //boolean value

  // //always has to be a function expression
  // calculateAge: function (birthYear) {
  //   //function value
  //   return 2021 - birthYear;
  // },

  // calculateAge: function () {
  //   return 2041 - this.birthYear; //"this" reffers to the snape variable
  // },

  calculateAge: function () {
    this.age = 2021 - this.birthYear; //creates a new property and sets it as the result of 2021 - year
    return this.age; //we don't need to return, but it's good practice to do so
  },

  //practice
  getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()}-year od ${
      this.job
    } and he has ${this.hasDriversLicence ? "a" : "no"} drivers licence`;
  },
};

// console.log(snape.calculateAge(1991)); //for func expression example
// console.log(snape.calculateAge()); // for first "this" example

console.log(snape.calculateAge());
console.log(snape.age);
console.log(snape.age);
console.log(snape.age);

console.log(snape.getSummary());

/////////////////////////////////FOR LOOP/////////////////////////////////
for (let i = 1; i <= 10; i++) {
  console.log(`lifting weights repetition ${i} 🏋️‍♂️🏋️‍♀️🏋️‍♀️`);
}

/////////////////////////////////LOOPING ARRAYS, BREAKING AND CONTINUING/////////////////////////////////
const claire = [
  "cliare",
  "Schmedman",
  2037 - 1991,
  "teacher",
  ["Michale", "Peter", "Steve"],
  true,
];

const types = [];

for (let i = 0; i < claire.length; i++) {
  console.log(claire[i]); //logs the entire array

  // types[i] = typeof claire[i]; //adds the type value of each element ot the other array
  types.push(typeof claire[i]);
}
console.log(types);

const birthYears = [1996, 1997, 1998, 1999, 2000];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  ages.push(2021 - birthYears[i]);
}
console.log(ages);

//CONTINUE (exits the current itteration of the loop and continues to the next one)
console.log("---ONLY STRINGS----");
for (let i = 0; i < claire.length; i++) {
  if (typeof claire[i] !== "string") continue; //if the value of current element is not string continue to next itteration, skipping this one
  console.log(claire[i]);
}

//BREAK (terminates the loop entirely)
console.log("---BREAK WITH NUMBER----");
for (let i = 0; i < claire.length; i++) {
  if (typeof claire[i] === "number") break; //after the first number is found(the year in this array) it stops the loop
  console.log(claire[i]);
}

/////////////////////////////////LOOPING THROUGH ARRAYS BACKWARDS, NESTED LOOPS/////////////////////////////////

for (let i = claire.length - 1; i >= 0; i--) {
  //loops through the array backwards
  console.log(i, claire[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------------------STARTING EXERCISE ${exercise}`);

  for (let rep = 1; rep < 5; rep++) {
    //for each itteration of the outer loop, we get 4 itterations of the inner
    console.log(`Exercise:${exercise}: Lifting weight repetition: ${rep} 🏋️‍♂️🏋️‍♀️`);
  }
}

/////////////////////////////////WHILE LOOP/////////////////////////////////
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting Weights Rep:${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`YOU ROLLED ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; //rolls the dice again at the end of the loop

  if (dice === 6) {
    console.log(`You rolled a SIX, loop is over now`);
  }
}
