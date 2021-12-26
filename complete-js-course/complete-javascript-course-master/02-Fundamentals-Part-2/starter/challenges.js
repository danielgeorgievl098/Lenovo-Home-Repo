"use strict";

//CHALLENGE1

const dolphins = (a, b, c) => (a + b + c) / 3;
const koalas = (a, b, c) => (a + b + c) / 3;

function checkWinner(dolphAvg, koalaAvg) {
  if (dolphAvg > koalaAvg * 2) {
    const winner = `Dolphins win (${dolphAvg} vs ${koalaAvg})`;
    return winner;
  } else if (koalaAvg > dolphAvg * 2) {
    const winner = `Koalas win ${koalaAvg} vs ${dolphAvg})`;
    return winner;
  } else {
    const neither = "no team wins";
    return neither;
  }
}

const dolphinAvg = dolphins(85, 54, 41);
const koalaAvg = koalas(23, 34, 27);

const winner = checkWinner(dolphinAvg, koalaAvg);
console.log(winner);

//CHALLENGE2
const calcTip = (uwu) => {
  if (uwu >= 50 && uwu <= 300) {
    return uwu * 1.15;
  } else {
    return uwu * 1.2;
  }
};

const bills = [125, 555, 44];
const total = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(total);

// const calcTip2 = (bill) => //with TARNARY operator
//   bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.2;

//CHALLENGE3
const marc = {
  firstName: `Mark`,
  lastName: ` Miller`,
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: `John`,
  lastName: ` Smith`,
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(marc.calcBMI(), john.calcBMI());

if (marc.bmi > john.bmi) {
  console.log(
    `${marc.firstName}'s BMI(${marc.bmi}) is higher than ${john.firstName}'s BMI(${john.bmi})'`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${marc.firstName}'s BMI (${marc.bmi})'`
  );
}

//CHALLENGE4
const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

for (let i = 0; i < bills4.length; i++) {
  totals.push(calcTip(bills4[i]));
}
console.log(totals);

//bonus
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}
let bonus = calcAverage(totals);
console.log(bonus);
