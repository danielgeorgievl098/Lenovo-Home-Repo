class runnable {
  run() {
    console.log(this);
    console.log('running');
  }
}

class logger {
  number1 = 0;
  number: number;

  constructor(numb: number) {
    this.number = numb;
  }

  loger() {
    this.number1 = this.number1 + 1;
  }

  info() {
    console.log(this);
  }
}

class Animal {
  runnable: runnable;
  name: string;
  logger: logger;

  constructor(name: string) {
    this.runnable = new runnable();
    this.name = name;
    this.logger = new logger(5);
  }
}

const dog = new Animal('Doggo');

dog.runnable.run();
dog.logger.loger();
dog.logger.loger();
console.log(dog.logger.number1);
console.log(dog.logger.number);

class Dog extends Animal {
  breed: string;
  logger2: logger;
  constructor(breed: string) {
    super('David');

    this.breed = breed;
    this.logger2 = new logger(10);
  }
}

const dog2 = new Dog('Pug');

console.log(dog2);
dog2.logger.info();
dog2.runnable.run();
console.log(dog2.logger.number1);
dog2.logger.loger();
dog2.logger.loger();
console.log(dog2.logger.number1);

console.log(dog2.logger);
console.log(dog2.logger2);
console.log(dog2);
