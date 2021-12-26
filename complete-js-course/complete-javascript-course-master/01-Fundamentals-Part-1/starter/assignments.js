//first lecture
let country = "Bulgaria";
let continent = "Europe";
let population = 7000000;

console.log(country);
console.log(continent);
console.log(population);

//second lecture
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//third lecture
language = "bulgarian";

//forth lecture

let countryHalf = population / 2; //3 500 000
countryHalf++; // 3 500 001

const finland = 6000000;
console.log(population > finland); //true

let average = 33000000;

console.log(population > average); //false

///////////////////////////EQUALITY OPERATORS////////////////////////////////////
// numNeighbours = Number(
//   prompt("How many countries neighbours does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("more than 1 border");
// } else {
//   console.log("No Borders");
// }

///////////////////////////LOGICAL OPERATORS////////////////////////////////////

if (language === "english" && population < 50000000 && !isIsland) {
  console.log("You should live in this country");
} else {
  console.log("You should not live in this country");
}

///////////////////////////SWITCH STATEMENTS////////////////////////////////////
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of speakers");
    break;
  case "spanish":
    console.log("second most number of speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  default:
    console.log("That is a great language as well");
}
