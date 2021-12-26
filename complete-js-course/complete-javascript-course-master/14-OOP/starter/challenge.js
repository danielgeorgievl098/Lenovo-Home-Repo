`use strict`;

console.log(
  `------------------------------------- CHALLENGES --------------------------------`
);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
  return this;
};

const bmw = new Car('BWM', 125);
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();

console.log(
  `---------------------------------------------- CHALLENGE 2 -------------------------------------------`
);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  //this is just a method that sets the speed
  set usSpeed(speedPara) {
    this.speed = speedPara * 1.6;
  }
}

const ferrari = new CarCl('Ferrari', 120);
console.log(ferrari.speedUS);
console.log(ferrari.speed);
// ferrari.accelerate();
// ferrari.brake();
// ferrari.accelerate();

//we are calling the usSpeed() func
ferrari.usSpeed = 60;
console.log(ferrari.speed);
console.log(ferrari.usSpeed);

ferrari.speed = 120;
console.log(ferrari.speedUS);

ferrari.usSpeed = 10;
console.log(ferrari.speed);

console.log(
  `---------------------------------------------- CHALLENGE 3 -------------------------------------------`
);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//craeting a prototypr chain
EV.prototype = Object.create(Car.prototype);

//creating a method only one the EV.prototype
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of  ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 100, 60);

console.log(tesla);
tesla.chargeBattery(10);
console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.accelerate();

///////////////////////////////////////// FINAL CHALLENGE
class EV2 extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }

  accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h with a charge of  ${this._charge}%`
    );
    return this;
  };
}

const jaguar = new EV2('Jaguar', 120, 10);
console.log(jaguar);
jaguar.accelerate().chargeBattery().brake().accelerate();
