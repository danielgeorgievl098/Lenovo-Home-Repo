///////////////////////////////INTERFACES INTRO
console.log(
  `--------------------------------------- INTERFACES INTRO ------------------------------------`
);

//INTERFACES describe how an OBJECT shoud look like
//they are similar to CUSTOM TYPES
//interface KEYWORD ONLY IN TS

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

//user1 MUST satisfy the definiton of Person interface
user1 = {
  name: "Hagrid",
  age: 55,

  greet(phrase: string) {
    console.log(`${phrase}, Harry!`);
  },
};

user1.greet("Hello");

///////////////////////////////INTERFACES WITH CLASSES
console.log(
  `--------------------------------------- INTERFACES WITH CLASSES ------------------------------------`
);

//like OBJECTS, CLASSES that IMPLEMENT this INTERFACE have to comply to it
interface Greetable {
  name: string;

  greet(): void;
}

// a CLASS can IMPLEMENT MULTIPLE INTERFACES, BUT CAN INHERIT ONLY FROM ONE OTHER CLASS
// the CLASS CAN have it's own properties(age), but it has to SATISFY THE MINIMAL REQUIREMENTS of the INTERFACE
class Player implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello there, ${this.name}`);
  }
}

const user2 = new Player("Snape", 55);
user2.greet();

///////////////////////////////EXTENDING INTERFACES
console.log(
  `--------------------------------------- EXTENDING INTERFACES  ------------------------------------`
);

interface Named {
  readonly name: string;
}
interface Aged {
  age: number;
}

//this is basically interface INHERITANCE
interface Greetings extends Named, Aged {
  greeting(): void;
}

//because we implement and interface that EXTENDS 2 other interfaces, we must satisfy the needs of ALL 3 INTERFACES
class Player2 implements Greetings {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`This is Interface Inheritance`);
  }
}

const player = new Player2("Dumbledore", 60);
player.greeting();
console.log(player);

///////////////////////////////INTERFACES AS FUNCTION TYPES
console.log(
  `--------------------------------------- INTERFACES AS FUNCTION TYPES  ------------------------------------`
);

//with TYPE
type AddFn = (a: number, b: number) => number;

const add1: AddFn = (num1: number, num2: number) => num1 + num2;
console.log(add1(5, 6));

//with INTERFACE
interface AddFn2 {
  (a: number, b: number): number;
}

const add2: AddFn2 = (num1: number, num2: number) => num1 + num2;
console.log(add2(5, 6));

//they both do the same, it's down to PREFERENCE

///////////////////////////////OPTIONAL PARAMETERS AND PROPERTIES
console.log(
  `---------------------------------------  OPTIONAL PARAMETERS AND PROPERTIES  ------------------------------------`
);
interface Optional {
  readonly name: string;
  //the '?' means it's optional = it may or may not exist
  surname?: string;
}
