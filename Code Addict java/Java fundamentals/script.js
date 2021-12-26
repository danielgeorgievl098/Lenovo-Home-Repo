// PART 1 ------ // Variables

let name = "Daniel";
let address, number, state; //creates the variables

address = "Pirin st.";
number = "24";

name = "Daniel G."; //modifies the variable

const middleName = "Tsvetanov"; //cannot re-asign

console.log(name);
console.log(middleName);
console.log(number, address);

//PART 2 ------------// String Concatenation and backticks
const name1 = `John`;
const lastName1 = `Shake The Snake`;

console.log(`Your full name is :` + name1 + ` ` + lastName1);

let fullName1 = name1 + ` ` + lastName1;
console.log(`Your full name is :` + fullName1); //same as above one

//PART 3 -----------//NUMBERS
let num1 = 5;

num1 += 6; // adds 6
num1 -= 6; //subtracts 6
num1++; //adds 1
num1--; //subtracts 1
num1 *= 6; //multiplies by 6
num1 /= 6; //divides by 6

let slices = 10;
let children = 3;
let remainingSlices = slices % children; //this gives back the remainder of 10/3, which is 1

//PART 4 ------------//DATA TYPES
/*  - Primitive - String, Number, Boolean, Null, Undefined, Symbol

    - Object - Arrays, Functions, Objects 
    
    - typeof - operator (typeof variable) (typeof value)

    - String => const text = `some text`;

    - Number => const number = 67;

    - Boolean => let value1 = true; let value2 = false;

    - Null => const result = null;'

    - Undefined => let name;

    - Symbol(ES6) => 
*/

//PART 5 -------//ARRAYS

const friends = [`John`, `Peter`, `Anna`, `Jane`, 57, undefined, null];
console.log(friends[3]);

let bestFriend = friends[2];
console.log(bestFriend);

friends[4] = `Cypress`; //reasigns the value
console.log(friends);

//PART 6 -----//FUNCTIONS

function hello(person) {
  console.log(`Hello there, ` + person + `!`);
}

hello(`Anna`);
hello(`Nina`);
const abby = `Abby`;
hello(abby);

//PART 6.1 -------//RETURN FUNCTIONS
const wallHeight = 80;
const width = calculate(100);
const height = calculate(wallHeight); // inputs the constant as input

function calculate(input) {
  const newValue = input * 2.54;
  return newValue; //if you don't return it it will just calculate it within the function and not store it in the array below
}

const dimensions = [width, height];
console.log(dimensions);

//PART 6.2---------//ANONYMOUS FUNCTIONS

const add = function (num1, num2) {
  return num1 + num2;
}; //you can either write a name of the func or leave it empty

const result1 = add(74, 53);
console.log(result1);

const someArray1 = [5, 7, add(7, 6), 67, 34, add(123, 432)]; //you can store the function in an array
console.log(someArray1);

//PART 7 ---------//OBJECTS

const personObject = {
  name: `Alicia`,
  lastName: `Johnson`,
  height: 186,
  married: true,
  siblings: [`Anna`, `Mario`, `John`], //you can have an array inside an object
  sayHello: function () {
    console.log(`Hello, my name is Alicia!`);
  },
};

console.log(personObject.married); //you call any parameter with a dot
console.log(personObject.siblings[1]);
personObject.sayHello(); //this is how you call the func from the Object.

const height1 = personObject.height; //you can asign a value from the object to a variable
console.log(height1);

personObject.lastName = `Fastbender`; //changes the value of the array paramether

//PART 8 -------// CONDITIONALS
/*

>  bigger than
<  smalled than
>= bigger or equal
<= smaller or equal
== checks if values ar the same 
=== checks if values and types are the same 
!= checks if values are not the same
!== checks if values and types are not the same

 */

const property1 = 6;
const property2 = 6;
const equals = property1 >= property2; //this is a boolean expression it's either true of false

if (property1 > property2) {
  console.log(`First number is bigger that second`);
} else if (equals) {
  console.log(`They are equals`);
} else {
  console.log(`Second number is bigger that first`);
}

const value = false;
if (!value) {
  //checks if value is not true
  console.log(`value is false`);
}

const property3 = 7;
const property4 = 7;
const equals2 = property3 == property4; // checks if values ar the same
const equals3 = property3 === property4; // checks if values and types are the same

//PART 8.1 --------// LOGICAL OPERATORS
// (|| - OR) (&& - AND)

const name2 = `Sam`;
const age1 = 25;

if (name2 === `Holly` || age1 === 25) {
  //it will print out "Hello, there" because one of the conditions is met
  console.log(`Hello, there!`);
} else {
  console.log(`wrong values`);
}

//PART 9 ----------// SWITCH STATEMENTS

const dice = 2; //this is a three-sided dice

switch (dice) {
  case 1:
    console.log(`you rolled 1`);
    break; //we need to break after every case or it will run all cases
  case 2:
    console.log(`you rolled 2`);
    break;
  case 3:
    console.log(`you rolled 3`);
    break;
  default:
    // what to do when it's not any of the other cases
    console.log(`you didn't roll!`);
}

//PART 10 ---------//LOOPS

let amount = 5;

while (amount > 0) {
  console.log(`I have ` + amount + ` dollars on me`);
  amount--;
}

let money = 12;

do {
  console.log(`you have ` + money + ` dollars left`);
} while (money < 10); //this loop will always run atleast one time

for (let i = 0; i < 3; i++) {
  console.log(`current number is: ` + i);
}

//PART 11 -------//STRING METHOND
let text = ` Captain Ahab`;

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);
console.log(text.charAt(3)); //prints the char at the given index
console.log(text.charAt(text.length - 1)); //prints the last char
console.log(text.indexOf(`A`)); // shows the index of the char (it is case-sensitive) if there are multiple chars it returns the first index
console.log(text.trim()); //gets rid of any "white space" before or after. in this case the space before the first word

console.log(text.trim().toLowerCase().startsWith(`captain`)); //this trims/sets to lower and checks if the string starts with "captain" (this retursn a boolean)
console.log(text.includes(`hab`)); //( returns a boolean)
console.log(text.slice(1, 5)); //creates a new string from the first index up to(not including) the second index
console.log(text.slice(-2)); // sliced from the back of the string

//PART 12 --------//TEMPLATE LITERALS

const name3 = `Willy`;
const age2 = 25;

const value3 = `Hey, my name is ${name3} and I am ${age2} years old! And also here is some simple math: ${
  (4 + 4, 7 * 8)
}`;
console.log(value3);

//PART 13 --------//ARRAY PROPERTIES AND METHODS

const names = [`John`, `Jane`, `Anna`, `Bobo`];
const lastNames = [`Pancake`, `Fruitcake`, `Spicy`, `Doner`];

//concat
const allNames = names.concat(lastNames); //this combines the 2 arrays
console.log(allNames);

// reverse
console.log(allNames.reverse()); //this reverses the order

//unshift
allNames.unshift(`Gigi`); //adds Anna to the beggining
allNames.unshift(`Ally`);
console.log(allNames);

//shift
allNames.shift(); //removes the first element
console.log(allNames);

//push
allNames.push(`Susy`); //adds Susy to the back of the array

//pop
allNames.pop(); // removes the last item from the array

//splice
const newNames = allNames.splice(2, 3); //this creats a new array. The first para. shows from which index to start. The second para. shows how much elements you want after the first para
console.log(newNames);

//PART 14 ------//REFERENCE & VALUE
let num3 = 1;
let num4 = num3;
num4 = 22;

console.log(`the value of the first number is: ${num3}`);
console.log(`the value of the second number is: ${num4}`);
//when you assing primitive data values to a variable, you do not affect the original value

let person1 = { name: `bob` };
let person2 = person1;
person2.name = `susy`;

console.log(`The name of the first person is: ${person1.name}`);
console.log(`The name of the second person is: ${person2.name}`);
//when, however, you assing non-primitive data value to a variable(in this case to array value), any changes will affect all the references

//PART 15 -----------// NULL & UNDEFINED
/*
-> both represent "no value"

-> undefined - "java cannot find value for this"
  ->variable without value
  ->missing function argument
  ->missing object properties

-> null - "developer sets no value"
 */
let value6 = 20 + null;
let value7 = 20 + undefined;

console.log(value6 + ` and ` + value7);

//PART16 --------------//THRUTHY & FALSY

const bool1 = `bob`;
const bool2 = ``;

if (bool1) {
  //this will result in true
  console.log(`bool1 is truthy`);
} else {
  console.log(`bool1 is falsy`);
}

if (bool2) {
  //this will result in false
  console.log(`bool2 is thruthy`);
} else {
  console.log(`bool2 is falsy`);
}
//other falsy operators ( "", '', ``, 0, -0, NaN, false, null, undefined)

//PART 17 --------//TARNARY OPERATOR

// condition ? (runs if true) : (runs if false)

const value4 = 1 < 0;

value4 ? console.log(`value is true`) : console.log(`value is false`);

//PART 18 ------// GLOBAL & LOCAL SCOPE

let globalName = `Swonny`;

function example() {
  const globalName = `Packett`; //this is effected just within the function
  console.log(globalName);
}
example();

if (true) {
  const globalName = `Heward`;
}

console.log(`Hello my name is ${globalName}`); //this will print out Swonny

//PART 19 -------//VARIABLE LOOKUP

const globalNumber = 5;

function addition(num1, num2) {
  // const globalNumber = 10; (if this is uncommented result will be 30, bc. java will use this instd of 5)
  let addition = num1 + num2 + globalNumber;
  return addition;
}

console.log(addition(10, 10));

// PART 20 ---------//CALLBACK FUNCTIONS, HIGHER ORDER FUNCTIONS, FUNCTIONS AS FIRST CLASS OBJECTS/CITIZENS

//Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from function(closure)

//Higher order functions - accepts another function as an argument OR returns a function as a result

//Callback functions - passed to another functions as an argument and executed inside that function

function morning(strangerName) {
  //this is a callback function
  return `Good morning ${strangerName.toUpperCase()}`;
}

function afternoon(strangerName) {
  //this is a callback function
  return `Good afternoon ${strangerName.repeat(4)}`; //reapeats the string to which it is attached
}

function greet(strangerName, cb) {
  //higher order func

  const myName = `Daniel`;
  console.log(`${cb(strangerName)}, my name is ${myName}`);
}

greet(`Harry`, morning);
greet(`Ron`, afternoon);

//PART 21 -................// ARRAY METHODS(forEach,map, filter, find, reduce)

//21.1 forEach (does not return a new array)

const people = [
  //aray
  { nickname: `Beatle`, years: 23, position: `developer`, id: 1, salary: 2000 },
  { nickname: `Jiggly`, years: 31, position: `designer`, id: 2, salary: 300 },
  { nickname: `Poko`, years: 72, position: `boss lady`, id: 3, salary: 2500 },
  { nickname: `Allex`, years: 12, position: `cat king`, id: 3, salary: 20 }, //objects
];

function showPerson(item) {
  console.log(item.position.toUpperCase());
}

people.forEach(showPerson); //here you are passing the callback function you wrote ealier

people.forEach(function (input) {
  console.log(`Hello, my name is ${input.nickname.toLocaleUpperCase()}`);
  //here you are passing the callback funtion directly
});

//21.2 map (does return a new array)

const ages = people.map(function (inputHere) {
  return inputHere.years; //returns an array of the years in the "people" array
  //the new array will have the same number of items as in "people"
});
console.log(ages);

const olderPeople = people.map(function (someInput) {
  return {
    //this returns an array with objects
    firstName: someInput.nickname.toUpperCase(),
    oldAge: someInput.years + 30,
  };
});
console.log(olderPeople);

//21.3 fiter (does return a new array)

const youngPeople = people.filter(function (someInput) {
  return someInput.years <= 25;
});

console.log(youngPeople);

const developers = people.filter(function (input) {
  return input.position === `developer`; //returns an array of people whose job is developer
});

console.log(developers);

//21.4 find (returns on object) (returns first mactch, if no match undefined) (great for getting unique value)

const findPerson = people.find(function (input) {
  return input.id === 3;
});

console.log(findPerson);

//21.5 reduce (iterates, callback func)(reduces to a single value - number, array, object)(1st parameter = `acc` - total of all calculations) (2nd parameter = `curr` - current iteration/value)

const totalSalary = people.reduce(function (accumulator, currentItem) {
  console.log(`total : ${accumulator}`);
  console.log(`current salary : ${currentItem.salary}`);
  accumulator += currentItem.salary;
  return accumulator; //you ALWAYS want return the acc
}, 0); //this zero is our initial value

console.log(totalSalary);

//22 DOM
// you get CLASS with `.` and ID with `#`
//22.1 ------------------//getElementById

const h1 = document.getElementById(`title`); //you asign it to a variable so you don't have to write document....
h1.style.color = `red`;

const btn = document.getElementById(`btn`);
btn.style.backgroundColor = `yellow`;

//22.2 ---------------//getElementsByTagName (returns a node-list = array-like object)
const headings = document.getElementsByTagName(`h2`);
console.log(headings.length);
headings[0].style.color = `green`;

const items = document.getElementsByTagName(`li`);
items[1].style.color = `orange`;

//22.3 -------------//getElementByClassName (also returns a node-list)

const speacialItems = document.getElementsByClassName(`special`);
speacialItems[1].style.color = `red`;

//22.4 --------// querySelector(`any css`); - selects only first while querySelectorAll(`any css`) - selects all

const unordered1 = document.querySelector(`#unordered1`); //be mindful of HASHTAG
unordered1.style.backgroundColor = `teal`;

const alsoUnordered1 = document.querySelector(`.alsoUnordered`); //be mindful of DOT
console.log(alsoUnordered1); // this will log only the first item with this class

const alsoUnordered2 = document.querySelectorAll(`.alsoUnordered`);
console.log(alsoUnordered2);

alsoUnordered2.forEach(function (eachItem) {
  eachItem.style.color = `green`;
});

//23 -------// childNodes (returns all childNodes including whitespace which is treated as a tex node)
// children
// firstChild
// lastChild

const unordered2 = document.querySelector(`#unordered2`);
const children1 = unordered2.children;
console.log(children1); //logs all the li elements

console.log(unordered2.firstChild); //you also get whitespace text node here
console.log(unordered2.lastChild); //you also get whitespace text node here

//24 ----------// parentElement
const divHeading4 = document.querySelector(`h4`);
console.log(divHeading4.parentElement.parentElement); //you can chain as much as you want to. it will og up the tree to body then HTML until null
const parent = divHeading4.parentElement;
parent.style.color = `purple`;

//25 ------------//previousSibling & nextSibling (they return whitespace)
const first = document.querySelector(`.first`);
console.log(first); //gives Ferrari
const nextSibling = first.nextSibling.nextSibling; //you do it twice because the first time it returs whitespace
console.log(nextSibling); //this gives the list item Porsche

const last = document.querySelector(`.last`);
console.log(last); //gives Mazda
const previousSibling = last.previousSibling.previousSibling;
console.log(previousSibling); //this give Lamborghini

//25 -----------//CSS

const random = document.querySelector(`.random`);
console.log(random.style); //shows all the available style changes

//this is one way you can chahge it
/*random.style.backgroundColor = `blue`;
random.style.color = `white`;
random.style.fonrSize = `3rem`;
random.style.textTransform = `capitalize`;
*/

random.classList.add(`title`); //or you can just add it to the already done one in index

//26 -----------//EVENTS
//26.1 select ele. -> addEventListener() -> what event -> what to do

const eventBtn = document.querySelector(`.btn`);
const divHeading5 = document.querySelector(`h5`);

function changeColors() {
  let hasClass = divHeading5.classList.contains(`red`);
  if (hasClass) {
    //this if-statement is basically an on-off switch on-click
    divHeading5.classList.remove(`red`);
  } else {
    divHeading5.classList.add(`red`);
  }
}

btn.addEventListener(`click`, changeColors);

//26.2 -----//MORE EVENTS
/*
click - fires after full cycle of events has occured 
mousedown - button is pressed
mouseup - button is realeased 
mouseenter - move onto an element
mouseleave - move out of an element
 */

const divHeading6 = document.querySelector(`h6`);
const eventBtn2 = document.querySelector(`.btn2`);

eventBtn2.addEventListener(`click`, function () {
  console.log(`you clicked me`);
});

eventBtn2.addEventListener(`mousedown`, function () {
  console.log(`down`);
});

eventBtn2.addEventListener(`mouseup`, function () {
  console.log(`up`);
});

divHeading6.addEventListener(`mouseenter`, function () {
  divHeading6.classList.add(`blue`);
});

divHeading6.addEventListener(`mouseleave`, function () {
  divHeading6.classList.remove(`blue`);
});

//26.3 ------/ keypress/keydown/keyup

//const nameInput = document.getElementById(`nameInput`);

//nameInput.addEventListener(`keypress`, function (e) {
//  console.log(`you pressed a key`);
//});

//27 ------------//FORMS
const form = document.getElementById(`form`);
const username = document.getElementById(`name`);
const password = document.getElementById(`password`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault(); //prevents page from reloading when you submit
  console.log(`submited`);
  console.log(username.value);
  console.log(password.value);
});
