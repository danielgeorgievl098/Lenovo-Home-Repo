console.log(`//OBJEEEEECCCTTTS`);

const obj = {
  key: `value`,
  year: 1984,
  object: {},
};

obj[`year`] = 2001;
console.log(obj[`key`]);

//1 constructer syntax

const obj2 = new Object();

obj2.key = `value`;
console.log(obj2.key);

//2 using a static method
const organism = {
  dna: Math.random(),
};

const obj3 = Object.create(organism); //this is called a prototype chain

console.log(obj3); //this logs an empty object
console.log(obj3.dna); //this gives a random num
console.log(Object.getPrototypeOf(obj3)); //this logs dna:*some random num*

//3 define property
const someObject = Object.create({});

Object.defineProperty(someObject, `unicorn`, {
  value: `rainbow`,
});

console.log(someObject.unicorn); //prints `rainbow`

//4 literal syntax
const spider = `spider`;
const legs = 8;

const spiderObject = {
  spider,
  legs,
};

console.log(spiderObject.legs); //prints 8

//5 destructoring

const { spider: mySpider, legs: hasLegs } = spiderObject;

console.log(mySpider, hasLegs); //prints spide 8

//6 methods
const spiderMethod = {
  spider,
  legs,
  web: ``,
  makeWeb: function () {
    this.web += `string string strinnnngg`;
    console.log(spiderMethod.web);
  },
};

spiderMethod.makeWeb(); //prints string string strinnnnggg

//7 spread syntax
let v = { boo: `spooky` };

let c = {
  ...v,
  somethingElse: `I am something else`,
};
console.log(c);

//8 looping over arrays
const loopObject = {
  commet: `I am a commet`,
  trex: `I have short arms`,
};

for (i in loopObject) {
  //loops over the array
  console.log(i);
}

//constructor
function Zombie(name) {
  this.name = name;
  this.reanimated = Date.now();

  this.eatBrain = function () {
    return `${this.name} is hungry for brains`;
  };
}

const newZombie = new Zombie(`Jeff`);
console.log(newZombie.eatBrain()); // Jeff is hungry for brains
console.log(newZombie.reanimated);

//END
