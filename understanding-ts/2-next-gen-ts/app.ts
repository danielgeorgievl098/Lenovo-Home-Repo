////////////////////////////////////////////////arrow functions
//here we are using normal arrow func
const printOutput = (inp: number | string) => console.log(inp);
printOutput("Helloo");

// with fucntion type assigned
const printOutput2: (inp: number | string) => void = (inp) => console.log(inp);

////////////////////////////////////////////////default function parameters

//the default params have to comply with the type we chose
const add = (num1: number = 5, num2: number = 5) => num1 + num2;
console.log(add());
console.log(add(10, 10));
console.log(add(10));

////////////////////////////////////////////////SPREAD OPERATOR(...)
const hobbies = ["reading", "writing", "skiing"];
const activeHobbies = ["hiking", ...hobbies];
console.log(activeHobbies);

const person = { firstName: "Mike", age: 30 };

const coppiedPerson = { ...person, job: "Mechanic" };
console.log(coppiedPerson);
coppiedPerson.firstName = "Jorge";
console.log(coppiedPerson);
console.log(person);

////////////////////////////////////////////////REST OPERATOR(...)
const add2 = (...numbers: number[]) => {
  return numbers.reduce((cur, acc) => {
    return (cur += acc);
  }, 0);
};

console.log(add2(10, 10, 1, 10));

////////////////////////////////////////////////ARRAY AND OBJECT DESCTRUC
const [hobbie1, hobbie2, ...others] = hobbies;
console.log(hobbie1, hobbie2, others);

const { firstName, age: howOld } = person;
console.log(firstName, howOld);
