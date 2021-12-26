// faster and easier way to access variables from arrays, objects

const fruits = [`orange`, `banana`, `cherry`, `pear`];
const friends = [`John`, `Mikel`, `Dusty`, `Fred`];

const [fruit1, fruit2, fruit222] = fruits; //it assing from index 0
const [name1, , name2, name4] = friends; //the comma is for skipping

console.log(fruit1, fruit2, fruit222);
console.log(name1, name2, name4);

let first = `Daniel`;
let second = `Goergiev`;

[second, first] = [first, second]; // swaps Daniel Goergiev to Georgiev Daniel

console.log(first, second);
