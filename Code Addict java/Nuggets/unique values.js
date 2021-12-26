const values = [
  {
    name: `pancakes`,
    type: `breakfast`,
  },
  {
    name: `burger`,
    type: `lunch`,
  },
  {
    name: `fries`,
    type: `lunch`,
  },
  {
    name: `eggs`,
    type: `dinner`,
  },
  {
    name: `milkshake`,
    type: `breakfast`,
  },
  {
    name: `cola`,
    type: `beverage`,
  },
];

const unique = [`someother`, ...new Set(values.map((sth) => sth.type))]; //gets only  1 of each type
console.log(unique);

//appending
const uniqueDiv = document.querySelector(`#unique`);
uniqueDiv.innerHTML = unique
  .map((sth) => {
    return `<button>${sth}</button>`;
  })
  .join(` `);
