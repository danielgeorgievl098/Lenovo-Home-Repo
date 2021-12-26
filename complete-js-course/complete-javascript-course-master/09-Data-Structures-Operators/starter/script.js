'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // we return an array here
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //destructoring objects in function parameters
  orderDelivery: function ({ starter = 1, main = 2, time = '20:00', address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starter]} and ${this.mainMenu[main]} will be delivered to ${address} at ${time} `
    );
  },

  //func with spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //func with rest operator
  orderPizza: function (mainIngredient, ...restOfIngredients) {
    console.log(mainIngredient);
    console.log(restOfIngredients);
  },
};

/////////////////////////////////ARRAY DESTRUCTORING///////////////////////
console.log('------ARRAY DESTRUCTORING--------');
const arr = [2, 3, 4];
//old way (one by one)
const a = arr[0];
const b = arr[1];
const c = arr[2];

//new way
const [x, y, z] = arr; //creates 3 variables and assigns values
console.log(x, y, z); //2, 3, 4

//with restaurant
const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria

const [First, , Third] = restaurant.categories;
console.log(First, Third); //Italian Vegetarian

///swapping variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//old way(with temp)
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(`old:`, main, secondary);
//new way
[main, secondary] = [secondary, main];
console.log(`new:`, main, secondary);

//order func (receive 2 return values from a func and assign them to variables)
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse); //Garlic Bread Pizza

//nested array
const nested = [4, 5, [6, 7]];

const [i, , j] = nested;
console.log(i, j); //4, [6,7]

const [k, , [l, m]] = nested;
console.log(k, l, m); //4,6,7

//default values
const [q = 1, w = 1, e = 1, r = 1, t = 1] = [9, 8, 7];
console.log(q, w, e, r, t); //9 ,8 ,7, 1, 1

/////////////////////////////////DESTRUCTORING OBJECTS///////////////////////
console.log('------OBJECT DESTRUCTORING--------');

//you have to write the exact names you want to copy (unlike with array, wher eyou just declare variables)
const { name, openingHours, categories } = restaurant; //order of elements does not matter
console.log(name, openingHours, categories);

//if you want different variable names
const {
  name: restaurantName,
  openingHours: workingHours,
  categories: tags,
} = restaurant;

console.log(restaurantName, workingHours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [], Foccacia, Bruschetta....

//mutating variables while destructoring
let n = 111;
let v = 999;

const obj = { n: 23, v: 7, c: 15 };
({ n, v } = obj); //you ALWAYS use PARENTHASES and variables must have the SAME NAME AS OBJ VALUES
console.log(n, v); //23 7

//nested objects
const { fri } = openingHours;
console.log(fri); //open:11 close:23

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23
//renaming
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl); //11 23

//destructoring inside function paramereters
restaurant.orderDelivery({
  //use SAME NAMES AS FUNC PARAMETERS
  time: `22:30`,
  address: 'Via del Sole, 23',
  main: 2,
  starter: 2,
});

/////////////////////////////////SPREAD OPERATOR///////////////////////
console.log('------SPREAD OPERAOR--------');

const array2 = [7, 8, 9];
const badNewArr = [1, 2, array2[0], array2[1], array2[2]];
console.log(badNewArr); //[1,2,7,8,9]

const newArr = [1, 2, ...array2];
console.log(newArr); //[1,2,7,8,9]
console.log(...newArr); //1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; //we are creating a new arr, not modifying the old one
console.log(newMenu);

//copy arr
const mainMenuCopy = [...restaurant.mainMenu]; //creates a shallow copy of the arr

//joining 2 or more arr
const entireMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(entireMenu);

//Iterables: arrays,strings,maps,sets, NOT objects
const stringy = 'Daniel is my name';
const letters = [...stringy, ' ', '.S']; //creates an arr with every single letter;
console.log(letters);

// //function with spread
// const ingredients = [
//   prompt(`let's make pasta! Ingredient1?`),
//   prompt(`let's make pasta! Ingredient2?`),
//   prompt(`let's make pasta! Ingredient3?`),
// ];
// console.log(ingredients);

// //bad way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// //good way
// restaurant.orderPasta(...ingredients);

// //spread with objects

const newRestaurant = {
  ...restaurant,
  founder: 'Giuseppe',
  foundingYear: 1998,
};

console.log(newRestaurant);

//shallow copy of objects
const restaurantCopy = { ...restaurant }; //coppies the object
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name); //Classico Italiano
console.log(restaurantCopy.name); //Ristorante Roma

/////////////////////////////////REST OPERATOR///////////////////////
console.log('------REST OPERAOR--------');

// 1) Destructoring
//SPREAD is on the RIGHT side
const spread = [1, 2, ...[3, 4]];
console.log(spread);

//REST is on the LEFT side
const [g, h, ...others] = [1, 2, 3, 4, 5, 6];
console.log(g, h, others); //1 2 [3,4,5,6]

//combined
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto 4[]

//with objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays); //{open:0, close: 24} {thu:{...}, fri:{...}...}

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(4, 5);
add(4, 5, 7, 2, 3, 4);
add(5, 5, 5, 5, 5, 5, 5, 55);

//spread and vs rest
const d = [2, 5, 6];
add(...d); //here we use SPREAD, which unpacks the values and the REST operator that is in the paramenter packs them back together

//func with rest operator
restaurant.orderPizza('mushrooms', 'olives', 'french fries', 'pesto'); //mushrooms ['olives', 'french fries'....]
restaurant.orderPizza('pineapple'); // pineapple []

/////////////////////////////////SHORT CIRCUITING///////////////////////
console.log('------SHORT CIRCUITING--------');

//take ANY data type and return ANY data type

// 1) OR operator
console.log('--------OR-------');
//short circuitign = if the first value is truthy, it will not look at the values after the first truthy

console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || '' || null || 'Hello' || 23 || 0); // Hello <- it is the first truthy value

//long way
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10 <- bc the value does not exist

//short way
const guests2 = restaurant.numGuests || 12;
console.log(guests2); //12

// 2) AND operator

console.log('--------AND-------');

//shot circuits at the first falsy and does not check the rest
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas <- always logs the LAST value

console.log('Hello' && 23 && null && 'Jonas'); //null

//long way
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'olives');
}

//short way
restaurant.orderPizza && restaurant.orderPizza('pesto', 'garlic');
