//ASIGNMENT1 FUNCTIONS

function describeCountry(country, population, capitalCity) {
  const information = `${country} has a population of ${population} and it's capital city is ${capitalCity}`;
  return information;
}

const description1 = describeCountry("Bulgaria", 700000, "Sofia");
const description2 = describeCountry("China", 10000000, "Beijin");
const description3 = describeCountry("Russia", 200000, "Moscow");

console.log(description1);
console.log(description2);
console.log(description3);

//ASSIGNMENT2 - FUNCTION DECLARATION/EXPRESSION

//DECLARATION
function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return (population / worldPopulation) * 100;
}

const test1 = percentageOfWorld1(1441);
const test2 = percentageOfWorld1(7);
const test3 = percentageOfWorld1(790);
console.log(test1, test2, test3);

//EXPRESSION
const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return (population / worldPopulation) * 100;
};

const test4 = percentageOfWorld2(790);
const test5 = percentageOfWorld2(2555);
const test6 = percentageOfWorld2(79);
console.log(test4, test5, test6);

//ASSIGNMENT3 - ARROW FUNCTION
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const usa = percentageOfWorld3(790);
console.log(usa);

//ASSIGNMENT4 - FUNCTIONS INSIDE FUNCTIONS

function describePopulation(country, population) {
  const percentage1 = percentageOfWorld1(population);

  return `${country} has ${population} which is about ${percentage1}% of the world's population `;
}

const describeBg = describePopulation("Bulgaria", 790);
const describeHg = describePopulation("Hungary", 10);
console.log(describeBg);
console.log(describeHg);

//ASSIGNMENT5 - ARRAYS
const populations = [7900, 650, 79, 790];
console.log(populations.length === 4); //checks if length is 4

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];

console.log(percentages);

//ASSIGNMENT6 - ARRAY METHODS

const neighbours = ["Germany", "Englad", "Belgium", "France"];
neighbours.push("Utopia");

console.log(neighbours);
neighbours.pop();

if (!neighbours.includes("Bulgaria")) {
  //!!does not include
  console.log("Probably not a Eastern European Country");
}

neighbours[neighbours.indexOf("Germany")] = "Sudatenland";
console.log(neighbours);

//ASSIGNMENT7 - OBJECTS
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 8000000,
  neighbours: ["Greece", "Turkey", "Macedonia", "Serbia", "Romania"],

  //for object methods
  describe: function () {
    console.log(
      `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and the capital is called ${this.capital}`
    );
  },
};

//ASSIGNMENT8 - BRACKET & DOT NOTATION
console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is called ${myCountry.capital}`
);

myCountry.population += 2000000;
console.log(myCountry.population);
myCountry["population"] -= 3000000;
console.log(myCountry.population);

//ASSIGNMENT9 - OBJECT METHODS
myCountry.describe();

//ASSIGNMENT10 - FOR LOOP
for (let voter = 1; voter <= 10; voter++) {
  console.log(`Currently, voter number ${voter} is casting their vote 🤞.`);
}

//ASSIGNMENT 11 - LOOPING ARRAYS/BREAKING/CONTINUING
const populations2 = [7900, 650, 79, 790];

let percentages2 = [];
for (let i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
}

console.log(percentages2);

//ASSIGNMENT12 - LOOPING BACKWARDS
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(`Outer loop currently on index ${i} which is:`);

  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(j, listOfNeighbours[i][j]);
  }
}

//ASSIGNMENT13 - WHILE LOOP
let percentage3 = [];
let neighbour = 0;

while (neighbour < populations2.length) {
  percentage3.push(percentageOfWorld1(populations2[neighbour]));
  neighbour++;
}
console.log(percentage3);
