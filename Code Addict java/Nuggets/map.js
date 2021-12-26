const people = [
  {
    name: `Bobby`,
    age: 24,
    hobby: `surfing`,
  },
  {
    name: `Haley`,
    age: 21,
    hobby: `drawing`,
  },
  {
    name: `Max`,
    age: 35,
    hobby: `Cooking`,
  },
];

const agesOfAll = people.map((age) => age.age); //creates a new array
const olderAges = people.map((input) => {
  return (input.age += 10);
});
console.log(agesOfAll, olderAges);

const allCaps = people.map((sth) => {
  return {
    capsName: sth.name.toLocaleUpperCase(),
    capsHobBy: sth.hobby.toLocaleUpperCase(),
  };
});
console.log(allCaps);

const index = people.map((sth) => `<h2>${sth.name}</h2>`);
const div = document.querySelector(`#map`);
div.innerHTML = index.join(``);
