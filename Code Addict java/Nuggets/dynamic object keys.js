const person = {
  name: `John`,
};

person.age = 45; //adds age to the array and sets it to 45
console.log(person);

//square bracket notation
const items = {
  "featured-items": [`item1`, 25],
};

console.log(items["featured-items"]);
console.log(person[`name`]); //this is how to use string

let appState = `reloading`;

const app = {
  [appState]: true,
};

console.log(app);

//dynamic keys
let state = {
  loading: true,
  name: ``,
  job: ``,
};

function updateState(key, value) {
  state[key] = value;
}

updateState(`name`, `Jessica`);
updateState(`market`, `good`);
updateState(`job`, `legend`);
updateState(`loading`, false);

console.log(state);
