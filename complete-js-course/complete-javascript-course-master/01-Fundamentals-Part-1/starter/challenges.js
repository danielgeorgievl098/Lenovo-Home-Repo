//CHALLENGE 1
const mHeight1 = 1.69;
const mWeight1 = 78;

const jHeight1 = 1.95;
const JWeight1 = 92;

let mBMI1 = mWeight1 / mHeight1 ** 2;
let jBMI1 = JWeight1 / jHeight1 ** 2;

let markHigherBMI = mBMI1 > jBMI1;
console.log(mBMI1, jBMI1, markHigherBMI);

//CHALLENGE 2
if (mBMI1 > jBMI1) {
  console.log(`Mark's BMI(${mBMI1}) is higher than John's (${jBMI1}) BMI`);
} else {
  console.log(`John's BMI(${jBMI1}) is higher than Mark's (${mBMI1}) BMI `);
}

//CHALLENGE 2
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;

console.log(dolphinsAvg, koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("dolphins WIN");
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("koalas WIN");
} else if (
  koalasAvg === dolphinsAvg &&
  koalasAvg >= 100 &&
  dolphinsAvg >= 100
) {
  console.log("it's a DRAW");
} else {
  console.log("NO TEAM WINS");
}

//CHALLENGE 3
let tip;
let bill = 430;

final = bill >= 50 && bill <= 300 ? (tip = 0.15) : (tip = 0.2);
console.log(tip);

console.log(
  `the bill was ${bill}$, the tip was ${tip}%, and the total value is ${
    bill * (tip + 1)
  }`
);
