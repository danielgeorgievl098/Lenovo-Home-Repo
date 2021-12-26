'use strict';
console.log('===============PART 2===============');

//////////////////////////ENHANCED OBJECT LITERALS////////////////
console.log('--------------ENHANCED OBJECT LITRALS------------------');

const weekDays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours2 = {
  [weekDays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays2[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays2[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours2);

// Data needed for first part of the section
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // we return an array here
  },
  openingHours2, //you just need to put in the name

  order(starterIndex, mainIndex) {
    //ES6 obje literal (we don't need to specify that this is a func)
    return [this.starterMenu[starterIndex], this.mainMenu[starterIndex]];
  },
};

//////////////////////////FOR OF LOOP////////////////
console.log('--------------FOR OF LOOP------------------');
const menu2 = [...restaurant2.starterMenu, ...restaurant2.mainMenu];

for (const item of menu2) console.log(item); //loggs all the elements of the array without indexing them

//if you want index

//bad way
for (const item of menu2.entries()) {
  console.log(item);
}

//good way
for (const [i, element] of menu2.entries()) {
  console.log(`${i + 1}: ${element}`);
}

//////////////////////////OPTIONAL CHIAINING////////////////
console.log(`--------------------OPTIONAL CHAINING-------------`);
//without
if (restaurant2.openingHours2 && restaurant2.mon) {
  console.log(restaurant2.openingHours2.mon); //it doesn't exist
}

//WITH optional chaining
console.log(restaurant2.openingHours2?.mon?.open); //we check  is the property exists, if it doesn't then jsut get undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(restaurant2.openingHours2[day]?.open);
}

//with METHODS (ALWAYS use the nullish operator ?? when checking methods)
console.log(restaurant2.order?.(1, 2) ?? 'Method does not exist');
console.log(restaurant2.orderSpaghetti?.(1, 2) ?? 'Method does not exist');

//with ARRAYS
const users = [{ name: 'Jonas', email: '@jona.io' }];
console.log(users[0]?.name ?? 'there is no such user');
console.log(users[0]?.job ?? 'there is no such user');

//////////////////////////LOOPING OBJECT_KEYS/VALUES AND ENTRIES////////////////
console.log(
  `--------------------LOOPING OBJECT KEYS/VALUES AND ENTRIES-------------`
);

//property NAMES
const properties = Object.keys(openingHours2);
console.log(properties);

let openStr = `We are open on ${properties.length} of 7 days: `;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours2);
console.log(values);

//property ENTRIES (keys + values)
const entries = Object.entries(openingHours2);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and we close at ${close}`);
}

//////////////////////////SETS////////////////
console.log(`--------------------SETS---------------`);

const orderSet = new Set([
  'pizza',
  'spaghetti',
  'apples',
  'spaghetti',
  'pizza',
  'pizza',
]);
//returns only UNIQUE values
console.log(orderSet);

console.log(new Set('Danniieeeelll'));
console.log(orderSet.size); //size NOT LENGHT
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));

//adding/removing
orderSet.add('risotto');
orderSet.add('risotto');
orderSet.delete('pizza');
console.log(orderSet);

//looping
for (const order of orderSet) console.log(order);

//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];

const staffUnique = new Set(staff);
console.log(staffUnique);
//simply checking size
console.log(new Set(staff).size);
console.log(new Set('Dannnnnniiiieeelllll').size);

//converting to array
const staffArr = [...new Set(staff)];
console.log(staffArr);

//////////////////////////MAPS: FIRST PART////////////////
console.log(`--------------------MAPS: FIRST PART---------------`);

const ristorante = new Map();
ristorante.set('name', 'Classico Italiano'); //key : value
ristorante.set(1, 'Firenze, Italy');
ristorante.set(2, 'Lisbon, Portugal');

//calling .set() also RETURNS the Map, so we can chain .set() elements
ristorante
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(ristorante.get('name'));
console.log(ristorante.get(true));
console.log(ristorante.get(1));

const time = 21;
//from the && we either ge true/false, which in this came maps to Map
console.log(
  ristorante.get(
    time > ristorante.get('opem') && time < ristorante.get('close')
  )
);

//checking content
console.log(ristorante.has('categories'));
ristorante.delete(2);
console.log(ristorante.size);

//arrays as keys

//always have to declare array before setting it as a value in order to be able to access it
const arrayKey = [1, 2];
ristorante.set(arrayKey, 'Test');
console.log(ristorante.get(arrayKey));

//////////////////////////MAPS: SECOND PART////////////////
console.log(`--------------------MAPS: SECOND PART---------------`);

//populating without .set()
//[0]=key : [1]=values
const question = new Map([
  ['question', 'What is the best programming language?'], //first entry
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! You guessed RIGHT! 🎉🎉🎉'],
  [false, 'Try Again'],
]);
//this array of arrays is the SAME STRUCTURE you get on Object.entries
const hoursMap = new Map(Object.entries(openingHours2));

console.log(hoursMap); //same structure
console.log(question); //same structure

//map ITTERATION
//destructoring just like in Obj.entrie
//QUIZZ App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//////////////////////////STRINGS: FIRST PART////////////////
console.log(`--------------------STRINGS: FIRST PART---------------`);
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); //starts from 4
console.log(airline.slice(4, 7)); //starts from 4/ends at 7

//getting firs/last word
console.log(airline.slice(0, airline.indexOf(' '))); //goes from 0 to first occurence of " ", so first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //goes from last space, so returns the last word (+1 removes the space)

//starting from the back
console.log(airline.slice(-3));
console.log(airline.slice(2, -2));

//check seat
const checkSeat = function (seat) {
  //B and E are middle
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You have the middle seat, SORRY');
  } else console.log('You got lucky');
};

checkSeat('11B');
checkSeat('23C');
checkSeat('3B');

//Fix capitalization in names
const passenger = 'dAnIEl'; //Daniel
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//replacing
const priceGB = '288,97B';
const priceUS = priceGB.replace('B', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenger to boarding door number3! Boarding door number3';
console.log(announcement.replace('door', 'gate'));
//booleans
const plane2 = 'Airbus A320Neo';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('Air'));
console.log(plane2.endsWith('Neo'));

//////////////////////////STRINGS: SECOND PART////////////////
console.log(`--------------------STRINGS: SECOND PART---------------`);

//SPLIT
console.log('a=very=nice=string'.split('='));
console.log('Daniel Goergiev'.split(' '));

const [firstName, lastName] = 'Daniel Georgiev'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  let split = name.split(' ');
  const newWord = [];
  for (const n of split) {
    newWord.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(newWord.join(' '));
};
capitalizeName('jesseca ann smith');

//repeat
const message2 = 'Bad weather....all departures canceled!';

console.log(message2.repeat(5));

console.log('-------challenge-3-----------------');

const test = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];

const camelCase = function ([...list]) {
  const word = list.join(' ').split(' ');
  const splitted = [];
  const final = [];
  const heart = '❤';
  let counter = 0;

  for (const w of word) {
    splitted.push(w.split('_'));
  }

  for (const [first, second] of splitted) {
    final.push(
      first.toLowerCase() +
        second[0].toUpperCase() +
        second.slice(1).toLowerCase()
    );
  }

  for (const word of final) {
    counter++;
    word.trim();
    console.log(`${word}` + `${heart.repeat(counter)}\n`);
  }
};
camelCase(test);

//////////////////////////FINAL PRACTICE////////////////
console.log(`--------------------FINAL PRACTICE---------------`);

// Data needed for a later exercise
const flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights2.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type
    .replace('_', ' ')
    .replace('_', ' ')} to ${from.slice(0, 3).toUpperCase()} from ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}
