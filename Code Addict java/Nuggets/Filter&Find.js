//filter - returns new array, can manipulate the size of the array (unlike map), returns based on condition
//find return single instance (object), returns first match, if no match undefined

const array = [
  { name: `Bob`, age: 20, position: `developer` },
  { name: `Amanda`, age: 32, position: `doctor` },
  { name: `Shon`, age: 20, position: `developer` },
  { name: `Crystal`, age: 12, position: `legend` },
];

//filter
const youngPeople = array.filter((person) => {
  return person.age < 30;
});
console.log(youngPeople);

const developers = array.filter((person) => person.position === `developer`); //if position matches it will return true and return position
console.log(developers);
// no match filter
const seniorDev = array.filter((person) => person.position === `senior dev`);
console.log(seniorDev); // empty arry

//find
const shon = array.find((song) => song.name === `Shon`);
console.log(shon);

//no match find
const oldPerson = array.find((kick) => kick.age > 35);
console.log(oldPerson); //undefined

//multiple matches : only first match
const randomPerson = array.find((orange) => orange.age < 35);
console.log(randomPerson); //Bob
