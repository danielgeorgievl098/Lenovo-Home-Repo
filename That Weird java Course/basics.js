// 1 PRIMATIVES & OBJECTS
//Primatives -  boolean/null/undefined/number/bignlt/string/symbol

var x; //undefined
var y = null; //null

//Objects - arrays/objects/ functions
var a = {}; //define
a[`foo`] = `bar`; //mutate
console.log(a); //{ foo : bar}

//2 Truthy/Falsy and Tarnary Operator

var q = true ? 1 : 3;
console.log(q); //1

//3 switch statement
var expression = `dog`;

switch (expression) {
  case `cat`:
    console.log(`mew mew`);
    break;
  case `dog`:
    console.log(`bark bark`);
    break;
} //bark bark

//3 FUNCTIONS

function hello(input) {
  const output = `Hello ${input}`;
  return output;
}
console.log(hello(`Daniel`)); // Hello Daniel

//3.1 anonymus functions
const someName = function () {};
//3.2 named funcitons
function someFunction() {}
//3.3 higher order functions
function cool(fun) {
  fun();
}
cool(() => console.log(`sweet`));
//3.4  Closure (func within a func, where the inner refferences a variable declared in the outer)
function outer() {
  const fish = `fishy`;
  let count = 0;

  function inner() {
    count++;
    return `${count} ${fish}`;
  }

  return inner;
}

const closure = outer();
console.log(closure()); // 1 fishy
console.log(closure()); // 2 fishy

//4 Objects (key:value)

const object = {
  id: `Clown`,
  age: 13,
  hello: function () {
    console.log(`hello ${this.id}`);
  },
};

object.hello(); // hello Clown

//END
