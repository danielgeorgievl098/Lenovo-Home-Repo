console.log(`THIS IS EXERCISE SECTION------------------------------------`);

//EXERCISE 1 -----//FULL NAME
const names2 = [`Jenifer`, `Brad`, `Rachel`];
const lastName = `McMuffin`;

let newArray = [];

for (let i = 0; i < names2.length; i++) {
  newName = `${names2[i]} ${lastName}`;
  newArray.push(newName);
}

console.log(newArray);

//EXERCISE 2 --------//CALCULATE TOTAL
const gas = [4, 3, 66];
const food = [42, 65, 12];

function total(myArray) {
  let sum = 0;

  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }

  if (sum > 100) {
    console.log(`Hey, you are spending way too much money`);
    return sum;
  } else {
    console.log(`Congratulations, you are within budget!`);
    return sum;
  }
}

const gasTotal = total(gas);
const foodTotal = total(food);
const entertainmentTotal = total([2, 4, 60]); //you can pass in the array straith to the func

console.log({
  gas: `Total gas is: ${gasTotal}`,
  food: foodTotal,
  entertainment: entertainmentTotal,
}); //this is an object inside the console log

//EXERCISE 3 ---------//
