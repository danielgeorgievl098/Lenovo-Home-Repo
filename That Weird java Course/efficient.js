console.log(`CODE THIS NOT THATTTTTT`);
//1 console log
const foo = { name: `Ron`, age: 30, nervous: false };
const bar = { name: `Harry`, age: 22, nervous: false };
const baz = { name: `hermione`, age: 20, nervous: true };

// console.log(foo);    this is bad way
// console.log(bar);
// console.log(baz);

console.log({ foo, bar, baz }); //correct way to print array (computer property names)

// 2 loging using css
console.log(`%c My friends`, `color: orange; fornt-weight: bold`); // you use %c and the second argument is css

//3 adding a table
console.table([foo, bar, baz]);

//4 stack trace logs
const deleteMe = () => console.trace(`bye bye database`); //logs on which line a function was defined when on which it was called

deleteMe();
deleteMe();

//5 deconstructoring

const turtle = {
  name: `Bob`,
  legs: 4,
  shell: true,
  type: `amphibious`,
  meal: 10,
  diet: `berries`,
};
//bad code
/* 

function feed(animal) {
return `Feed ${animal.name} ${anima.meal} kilos of ${animal.diet}`;
}

*/

//good code
function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
//or
function feed2(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} 10 kilos of ${diet}`;
}

//6 spread syntax
const pikachu = { name: `Pikachu` };
const stats = { attack: 30, hp: 40, deffence: 10 };

//bad code
/* 

pikachu[`hp`] = stats.hp;
pikachu[`deffecne`] = stats.deffence;
const level10 = Object.assing(pikachu, stats)
const level1 = Object.assign(pikachu, { hp: 45 });

*/

//good code
const lvl10 = { ...pikachu, ...stats }; //creates a new object and places the other 2 in it
const lvl1 = { ...pikachu, hp: 40 };

//6.1 spread syntax on arrays
let pokemon = [`Pika`, `Raichu`, `Bulbasor`];

//bad
// pokemon.push(`Arbok`);
// pokemon.push(`Deedle`);

//good
pokemon = [...pokemon, `Arbok`, `Deedle`]; //pushes the items to the end of the array
pokemon = [`Harry`, `Ron`, ...pokemon]; // adds to the beggining of array
pokemon = [`Drako`, ...pokemon, `Hermione`];

//7 loops
const orders = [50, 41, 200, 32, 62];

//bad
/*  
const total = 0;
const withTax = [];
const highValue = [];

for (i = 0; i < orders.length; i++) {
    //Reduce
    total += orders[i];

    //Map
    withTax.push(orders[i] * 1.1);

    //filter
    if (orders[i] > 100) {
    highValue.push(orders[i]);
    }
};
*/

//good

//Reduce
const total = orders.reduce((acc, cur) => acc + cur);
//Map
const withTax = orders.map((v) => v * 1.1);
//Filter
const highValue = orders.filter((v) => v > 100);

//8 async/await

const random = () => {
  return Promise.resolve(Math.random());
};

//bad
/*
const sumRandomAsyncNumbers = () => {
  let first;
  let second;
  let third;

  return random()
    .then((v) => {
      first = v;
      return random();
    })
    .then((v) => {
      second = v;
      return random();
    })
    .then((v) => {
      third = v;
      return first + second + third;
    })
    .then((v) => {
      console.log(`Result ${v}`);
    });
};
*/

//good
const sumRandomAsyncNumbers = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result is ${first + second + third}`);
};

//END
