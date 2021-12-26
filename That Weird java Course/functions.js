console.log(`////////////////FUNCTIONS DOC`);

//1 function declaration/definition/statement
function makeBread(parameter) {
  //function body
  const bread = `loaves `.repeat(parameter);

  //task or side-effect
  console.log(bread);

  //return value
  return bread;
}

const loaves = makeBread(6); //function call with anargument of 6
console.log(loaves);

//2 function expression
const makeBeer = function (parameter) {
  return `beers `.repeat(parameter);
};

const beers = makeBeer(4);
console.log(beers);

//3 immediately invoked function expression
(function () {
  const x = 23;
  console.log(x);
})();

//4 parameter and arguments
function makeBreakfast(main, side, drink) {
  console.log(`Breakfast includes: ${main}, ${side} and ${drink}`);
}

makeBreakfast(`pancakes`, `bacon`, `milk`);

//4.1 named parameters
function makeLunch(parameter) {
  const { main, side, drink } = parameter;
  console.log(`Lunck includes ${main}, ${side}, and ${drink}`);
}

makeLunch({ main: `eggs`, side: `fries`, drink: `coke` });

//4.2 rest parameter
function makeDinner(...parameter) {
  console.log(`Dinner includes the following items: ${parameter.join(``)}`);
}
makeDinner(`sushi `, `sahimi `, `sake`);

//5 arrow functions
const makeWine = (parameter) => `grapes `.repeat(parameter);
console.log(makeWine(3));

const makeWater = () => {
  const h20 = 25;
  console.log(`H20 amount in this sentence is : ${h20}`);
};
makeWater();

//6 pure functions
let p = 0;
const impure = () => {
  p++;
  return p ** 2; //code operates on values outside of its local scope, hence `impure`
};

const pure = (b) => b ** 2; //only mutates variables inside its local scope an doesn't have any side-effects

//8 higher-order functions (functions who take other function as input args or return a new function)

const hof = (inputFun) => {
  const called = inputFun();
  return () => `output fun`;
};

const arr = [1, 2, 3, 4, 5];
const squared = arr.map((t) => t ** 2);
console.log(squared);

//9 closures (everything inside {} is it's own lexical environment)

const l = 1;
//lexical env a

const outside = () => {
  //lexical env b
  const m = 2;

  console.log(l, m, n);
  const inside = () => {
    //lexical env c
    const n = 3;
    return l + m + n;
  };

  return inside;
};

// outside(); n will not be defined because "lexical env b" cannot look inside "lexical env c"

//9.1 closured continued

function useCat() {
  let name = `baby kitten`;

  return [() => `Meow ${name}`, (newName) => (name = newName)]; //it return 2 funcions
  //second func changes name to input
}

const [meow, setName] = useCat(); //this sets the names of the arrow functions inside useCat

console.log(meow()); // Meow baby kitten

setName(`CAMBUCHAA`);
console.log(meow()); // Meow CAMBHUCHAA

//END
