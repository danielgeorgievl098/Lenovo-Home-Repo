'use strict';
////////////////////////DEFAULT PARAMETERS/////////////////////
console.log('------------------default paratmenters----------------');

const bookings = [];

const createBooking = function (flightNUm, numPassengers = 1, price = 523) {
  const booking = {
    //obj literals let is not define values
    flightNUm,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking('LH523');
createBooking('LH523', 3, 800);
createBooking('LH533', undefined, 800); // ubdefubed revers to the default value

////////////////////////PASSING ARGUMENTS TO FUNCTIONS/////////////////////
console.log('------------------PASSING ARGUMENTS TO FUNCTIONS----------------');

const flight = 'LH234';
const jonas = {
  surrname: 'Schmetman',
  passport: 234324324324,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.surrname = 'Mr.' + passenger.surrname;

//   if (passenger.passport === 234324324324) {
//     alert('Checked in');
//   } else {
//     alert('Wong Passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight, jonas);
//passing a primitive values to a func, means making a copy of it, when you pass in an object, you make a pointer to THAT object in the memory HEAP
//JavaScript only passes by VALUE, there is NO PASS BY REFFERENCE

////////////////////////CALLBACK FUNCTIONS/////////////////////
console.log('------------------CALLBACK FUNCTIONS----------------');

const oneWord = function (str) {
  //removes spaces from a string
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, func) {
  console.log(`Transformed  phrase: ${func(str)}`);

  console.log(`Transformed by: ${func.name}`); //functions are OBJECTS and also have METHODS;
};

transformer(`JavaScript is the best`, upperFirstWord); //NOT CALLING upperFirstWord HERE
transformer(`JavaScript is the best`, oneWord);

const peace = function () {
  console.log('✌✌✌');
};

// document.body.addEventListener('click', peace);

////////////////////////FUNCTIONS RETURNING FUNCTIONS/////////////////////
console.log('------------------FUNCTIONS RETURNING FUNCTIONS----------------');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); //becuse greet() returns a function, greeterHey is now a func
greeterHey('Michael');
greeterHey('Daniel');

greet('Hello')('Michael');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Heya')('John');

////////////////////////the CALL and APPLY MTHODS/////////////////////
console.log('------------------the CALL and APPLY MTHODS----------------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function(){},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(254, 'Daniel Georgiev');
lufthansa.book(659, 'Harry Potter');

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//DOES NOT WORK because 'this' only works on objects
// book(23, 'Hermione Greinger');

//CALL METHOD
//first argument is what you want it to point to and the ones after as as usual
book.call(eurowings, 23, 'Hermione Greinger');
book.call(lufthansa, 255, 'Albus Dumbledore');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 299, 'Ron Wiesely');
console.log(swiss);

//APPLY METHOD(only takes an array as a second argument)
const flightData = [536, 'Draco Malfoy'];
book.apply(swiss, flightData);

console.log(swiss);

//but tou can do the same as apply by using the SPREAD OP

book.call(swiss, ...flightData);

console.log(swiss);

////////////////////////BIND METHOD/////////////////////
console.log('------------------BIND METHOD----------------');

//returns a NEW func where the THIS keyword will always be set to eurowings
const bookEW = book.bind(eurowings);

bookEW(436, 'Nicolas Flamel');

const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

//you can be very specific when creating a bind func(example: for specific flight num)

//we are also specifying the flightNum parameter, so we only need a name now
const bookEW23 = book.bind(eurowings, 23);
//no need for FlightNum
bookEW23('Severus Snape');

//with EVENT LISTENERS
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// const buyBtn = document.querySelector('.buy');

//in this case "this" will point to the button, because that is the function that is calling it, not to the "lufthansa" object
// buyBtn.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //s owe have to MANUALLY BIND it to the lufthansa object

//PARTIAL APPLICATION(pre-setting paramenters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //first arg is 'this' which we don't need here so it's standart to set to null if we're not using it
console.log(addVAT(100));

const returnVAT = rate => {
  return function (value) {
    return value + value * rate;
  };
};

console.log(returnVAT(1.1)(100));

//Challenge
console.log('-----------------CHALLENGE 1-----------------');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let answer = Number(
      prompt(
        `What is your favourite progamming language? \n${this.options.join(
          '\n'
        )}\n(Write option number)`
      )
    );
    if (answer <= 3 && answer >= 0) {
      this.answers[answer]++;
    } else {
      console.log(`invalid answer`);
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    type === 'string'
      ? console.log(`Poll results are ${this.answers.join(', ')}`)
      : console.log(this.answers);
  },
};

const btn = document.querySelector('.poll');
btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//bonus
poll.displayResults.call({ answers: [2, 3, 5, 2] }, 'string'); //we are basically giving it a new object to point to

////////////////////////IMMEADIATELY INVOKED FUNCTION EXPRESSIONS/////////////////////
console.log(
  '------------------IMMEADIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)----------------'
);
//are used for variable protection and encapsulation
//variables declared inside them cannot be accessed from outside
{
  let isPrivare = 23;
  var notPrivare = 23;
}
// console.log(isPrivate); //won't log
// console.log(notPrivate); //will log

(function () {
  console.log(`This will never run again`);
})();

//with arrow
(() => console.log(`This will ALSO never run again`))();

////////////////////////CLOSURES: PART 1 /////////////////////
console.log('------------------CLOSURES: PART 1 ----------------');

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();

////////////////////////CLOSURES: PART 2 /////////////////////
console.log('------------------CLOSURES: PART 2 ----------------');

////////////////////////////////////example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

console.log(
  `before we call func 'g' and assing variable 'f' to a func it's value is:`,
  f
);

g();
f();

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

console.log(
  `before we call 'h' and re-assign variabe 'f' to another func it's value is:`,
  f
);

h();
//re-assigning f
f();

////////////////////////////////////example 2
const boardPassengers = function (number, waitTime) {
  const perGroup = number / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${number} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000); //args are: func that will be executed and after how long

  console.log(`Will start boarding in ${waitTime} seconds`);
};

const perGroup = 1000; //if we remove the perGroup variable in the lexical enviornment in the closure, the func would use this global variable

boardPassengers(180, 4);

//////////////////challenge2
console.log('-----------------CHALLENGE 2-----------------');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
