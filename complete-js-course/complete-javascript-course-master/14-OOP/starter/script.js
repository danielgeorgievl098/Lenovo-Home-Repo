'use strict';

const Person = function (firstName, birthYear) {
  //instance properties
  this.name = firstName;
  this.year = birthYear;

  //NEVER create a func inside a Constructor
  //   this.calcAge = function () {
  //     console.log(2021 - this.year);
  //   };
};
const daniel = new Person('Daniel', 1998);
// 1: new empty object {} is created
// 2: function is called, 'this' keyword is set to the new empty object
// 3: empty object {} is linked to a prototype
// 4: function automatically returns the initial object {}
console.log(daniel);

const harry = new Person('Harry', 1989);
const hermione = new Person('Hermione', 1990);

console.log(harry, hermione);

const jay = 'Jay';
console.log(daniel instanceof Person);
console.log(jay instanceof Person);

////////////////////////////////////////////////////// Prototypes
console.log(
  `--------------------------------------------------- Prototypes ------------------------------------------`
);

//every Object craeted by a Constructor func will enherit all the methods and properties that we define on the constructor's 'prototype' property !!!!!!!!!!!!!!!!!

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.year);
};

daniel.calcAge();
harry.calcAge();

//we can also set properties to the prototype, not only methods

Person.prototype.species = 'Homo Sapiens';
//the 'species' property won't be directly on the objest, but will be on it's prototype

console.log(daniel, hermione);
console.log(daniel.species);

////////////////////////////////////////////////////// Protrypal Inheritance on build-in Objects
console.log(
  `--------------------------------------------------- Protrypal Inheritance on build-in Objects ------------------------------------------`
);

console.log(daniel.__proto__); //Person.prootype
console.log(daniel.__proto__.__proto__); //Object.prototype
console.log(daniel.__proto__.__proto__.__proto__); //end of prototype chain
console.log(Person.prototype.constructor); //points back at the Person FUNCION

/////////arrays
const arr = [5, 2, 6, 3, 6, 5, 5, 5, 4];

console.log(arr.__proto__); //Array.prototype
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); //Object.prototype

/////////////////// SETTING OWN ARRAY PROPERTIES
Array.prototype.unique = function () {
  return [...new Set(this)];
};

const arrUnique = arr.unique();
console.log(arrUnique);

const h1 = document.querySelector('h1');
console.dir(h1);
////////////////////////////////////////////////////// ES6 CLASSES
console.log(
  `--------------------------------------------------- ES6 CLASSES ------------------------------------------`
);

//class expression
const PersonClE = class {};

//class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //all methods written OUTSIDE the CONSTRUCTOR func will be on the PROTOTYPE obj
  calcAge = function () {
    console.log(2021 - this.birthYear);
  };

  get age() {
    return 2021 - this.birthYear;
  }

  //setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //this is on the PersonCL.constructor, will not be added to .prototype
  static hey() {
    console.log(`👋👋👋`);
  }
}

const dumbledore = new PersonCl('Albus Dubmledore', 1943);
console.log(dumbledore);

dumbledore.calcAge();

console.log(dumbledore.__proto__ === PersonCl.prototype);

//you can also add methods MANUALY to the .prototype
PersonCl.prototype.greet = function () {
  console.log(`Hello, ${this.firstName}`);
};

dumbledore.greet();

/////// 1. Classes are NOT HOISTED
/////// 2. Classes are FIRST CLASS CITIZENS(we can pass/return them from functions)
/////// 3. Classes are executed in STRICT MODE

////////////////////////////////////////////////////// SETTERS AND GETTERS
console.log(
  `--------------------------------------------------- SETTERS AND GETTERS ------------------------------------------`
);

const account = {
  owner: 'Harry',
  movements: [1241, 200, 5433, 3322],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(dumbledore.age);
console.log(dumbledore.fullName);

////////////////////////////////////////////////////// STATIC METHODS
console.log(
  `--------------------------------------------------- STATIC METHODS ------------------------------------------`
);

//this function is now on the Person CONSTRUCTOR, not on the Person PROTOTYPE, it is in the Person "Name Space"
Person.hey = function () {
  console.log(`👋👋👋`);
};
Person.hey();
// daniel.hey(); // .hey() is not on the daniel class, because it is not inherited, because it is not on the Person.prototype, but ont the Person.constructor

PersonCl.hey();

////////////////////////////////////////////////////// OBJECT.CREATE
console.log(
  `--------------------------------------------------- OBJECT.CREATE ------------------------------------------`
);

//////////////////// with this function we are MANUALLY setting the PROTOTYPE of an object

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  //this is NOT a constructor func
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//severus now has the PersonProto as it's .prototype
const severus = Object.create(PersonProto);
console.log(severus);

severus.name = 'Severus';
severus.birthYear = 1965;
severus.calcAge();
console.log(severus.__proto__ === PersonProto);

const jeeney = Object.create(PersonProto);
//setting properties in a better way
jeeney.init('Jeeney', 1990);
console.log(jeeney);

////////////////////////////////////////////////////// INHERITANCE BETWEEN CLASSES (CONSTRUCTOR FUNC)
console.log(
  `--------------------------------------------------- INHERITANCE BETWEEN CLASSES (CONSTRUCTOR FUNC) ------------------------------------------`
);

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

//we are manually setting the Student.prototype to the  Person.prototype, so Student inherrits all the methods from Person
Student.prototype = Object.create(Person2.prototype);
//this connection must be made BEFORE we create any  methods on Student.prototype

const ron = new Student('Ron', 1989, 'CS');
console.log(ron);

Student.prototype.introduce = function () {
  console.log(
    `Hello, everyone, my name is ${this.firstName} and I study ${this.course}`
  );
};

ron.introduce();
ron.calcAge();

console.log(ron instanceof Student);
console.log(ron instanceof Person2);

////////////////////////////////////////////////////// INHERITANCE BETWEEN CLASSES (ES6 CLASSES)
console.log(
  `--------------------------------------------------- INHERITANCE BETWEEN CLASSES (ES6 CLASSES) ------------------------------------------`
);

class PersonES6 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge = function () {
    console.log(2021 - this.birthYear);
  };

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`👋👋👋`);
  }
}

//the 'extends' keyword links the the prototypes behind the scenes
class StudentES6 extends PersonES6 {
  constructor(fullName, birthYear, course) {
    //super() is the "constructor" func of the parent class
    //we always need to declare it FIRST
    super(fullName, birthYear);

    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, everyone, my name is ${this.fullName} and I study ${this.course}`
    );
  }
}

const tom = new StudentES6('Tom Riddle', 1989, 'Dragon Teaching');
console.log(tom);
tom.introduce();
tom.calcAge();

////////////////////////////////////////////////////// INHERITANCE BETWEEN CLASSES (OBJECT.CREATE)
console.log(
  `--------------------------------------------------- INHERITANCE BETWEEN CLASSES (OBJECT.CREATE) ------------------------------------------`
);

const PersonProtoES6 = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  //this is NOT a constructor func
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const draco = Object.create(PersonProtoES6);

const StudentProto = Object.create(PersonProtoES6);

StudentProto.init = function (firstName, birthYear, course) {
  //we set the 'this' keyword to the init func
  PersonProtoES6.init.call(this, firstName, birthYear);
  this.course = course;
};

const hagrid = Object.create(StudentProto);
hagrid.init('Hagrid', 1990, 'CS');
console.log(hagrid);

StudentProto.introduce = function () {
  console.log(
    `Hello, everyone, my name is ${this.firstName} and I study ${this.course}`
  );
};

hagrid.introduce();
hagrid.calcAge();

////////////////////////////////////////////////////// ANOTHER CLASS EXAMPLE
console.log(
  `--------------------------------------------------- ANOTHER CLASS EXAMPLE ------------------------------------------`
);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //we can add properties that are not specified in the func input
    this._movements = []; // the underscore is the convention sign of 'protected' property, although it's truly not
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //Public interface

  //this is the way to access "private" property movements
  getMovements() {
    return this._movements;
  }

  deposit(sum) {
    this._movements.push(sum);
    return this;
  }

  withdraw(sum) {
    this.deposit(-sum);
    return this;
  }

  _approveLoan() {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
    }
    console.log(`Loan Approved!`);
    return this;
  }
}

const account1 = new Account('Harry', 'GBP', 1111);
console.log(account1);
account1.deposit(500);
account1.withdraw(200);
console.log(account1._movements);
account1.requestLoan(1000);

////////////////////////////////////////////////////// DATA ENCAPSULATION
console.log(
  `--------------------------------------------------- DATA ENCAPSULATION ------------------------------------------`
);
console.log(account1.getMovements());

////////////////////////////////////////////////////// PRICATE CLASS FIELDS AND METHODS (NOT IMPLEMENTED YET)
console.log(
  `--------------------------------------------------- PRICATE CLASS FIELDS AND METHODS (NOT IMPLEMENTED YET) ------------------------------------------`
);
// 1) Private Fields
// 2) Public Fields
// 3) Public Methods
// 4) Private Methods

class AccountFuture {
  // 1) Public fields (will be on all INSTANCES), they are NOT on the .prototype
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(sum) {
    this.#movements.push(sum);
  }

  withdraw(sum) {
    this.deposit(-sum);
  }

  #approveLoan() {
    return true;
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
    }
    console.log(`Loan Approved!`);
  }
}

const account2 = new AccountFuture('Harry', 'GBP', 1111);
// console.log(account2.#movements);

////////////////////////////////////////////////////// CHAINING
console.log(
  `--------------------------------------------------- CHAINING ------------------------------------------`
);

//if we want to chain methods all we have to do is return "this" from the method
account1
  .deposit(200)
  .withdraw(500)
  .deposit(100)
  .deposit(150)
  .withdraw(50)
  .requestLoan(2000);

console.log(account1.getMovements());
