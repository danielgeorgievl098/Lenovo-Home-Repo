///////////////////////////Variables and Values///////////////////////////

//variable declaration

// let firstName = "Daniel";
// console.log(firstName);

///////////////////////////Basisc Operators///////////////////////////
// const now = 2021;
// const ageJonas = now - 1991;
// const ageSarah = now - 1992;
// console.log(ageJonas, ageSarah);

// //string concatenation
// const firstName = "Jonas";
// const lastName = "Mandori";
// console.log(firstName + " " + lastName);

// //Assignment Operators
// let x = 10 + 5; //15
// x += 10; //25
// x *= 4; // 4*25 = 100
// x++; // x +  1 = 101
// console.log(x);

// //Comparison Operators
// // always return a boolean (< > >= <=)
// console.log(ageSarah >= 18); //true
// console.log(now - 1991 > now - 2018); //true

///////////////////////////OPERATOR PRECEDENCE///////////////////////////
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y); // firs the substraction is done, then assignment, it is also done right-to-left

///////////////////////////TEMPALTE LITERALS///////////////////////////
// const firstName = "Daniel";
// const job = "student";
// const birhtYear = 1998;
// const year = 2021;

// const description = `I'm ${firstName}, a ${year - birhtYear} year old ${job}`;
// console.log(description);

// //multi-line string
// console.log(`String
// with
// multiple
// lines
// `);

///////////////////////////IF_ELSE_STATEMENTS///////////////////////////
// const age = 19;

// if (age >= 18) {
//   console.log("🚗🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You have ${yearsLeft} years left`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

///////////////////////////TYPE CONVERSION AND COERCION///////////////////////////

// //type conversion
// const inputYear = "1998";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(24), 24);

// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - 10 - "3"); //converts them to a number(DOESN'T WORK WITH +)
// console.log("23" + 10 + "3"); //the 10 gets converted to a string not the other way araund
// console.log("23" > "18"); //true, converts to a string

// let n = "1" + 1; // '11'
// n = n - 1; //10

// let z = 2 + 3 + 4 + "5"; // '95
// let b = "10" - "4" - "3" - 2 + "5"; // '3' - 2 + '5' = 1 + '5' = '15'

///////////////////////////TRUTHY AND FALSY///////////////////////////
//5 falsy values : 0, "", undefined, null, NaN

///////////////////////////LOGICAL OPERATORS///////////////////////////
// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const isTired = true; //C

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     //Sarah can drive is she has a licence && has good vision && is NOT tired
//     console.log("Sara's able to driv");
// } else {
//     console.log("Someone else should drive");
// }

///////////////////////////TERNARY OPERATOR///////////////////////////

const age = 23;
// checks condition ? first part : second(else) part
age >= 18 ? console.log("vodka time") : console.log("water time");

const drink = age >= 18 ? console.log("wine🍷🍷") : console.log("water 🥛🥛🥛");

let drink2;
if (age >= 18) {
  drink2 = "old enough";
} else {
  drink2 = "not old enough";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water 🥛"}`);
