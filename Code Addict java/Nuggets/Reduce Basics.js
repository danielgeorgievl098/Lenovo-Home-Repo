//reduce
//iterates, callback func
//reduces to a single value - number/value/object
// first parameter 'acc' - total of all calculations
// second parametet 'curr' - curretn iteration/value

const staff = [
  { name: `Bob`, position: `developer`, salary: 2500 },
  { name: `Shon`, position: `engineer`, salary: 5000 },
  { name: `Amanda`, position: `legend`, salary: 200 },
  { name: `Rick`, position: `developer`, salary: 3500 },
  { name: `Morty`, position: `child`, salary: 0 },
];

const dailyTotal = staff.reduce((acc, curr) => {
  acc += curr.salary;
  return acc; //really importanta always return first parameter
}, 0); //number after comma is the starting vallue, if it was 200 it would be added on each round
console.log(dailyTotal);
