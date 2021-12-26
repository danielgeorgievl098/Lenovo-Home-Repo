const object = {
  first1: `Boby`,
  last: `Sanders`,
  city: `New York`,
  siblings: {
    sister: `Jane`,
    brother: `Mikkel`,
  },
};

const {
  city,
  first1,
  last: LastName, // collon (:) in this case is for renaming
  siblings: { sister, brother: favoriteSibling }, //here : is first used to show that it's an object in itself, and then to rename the variable inside object
} = object; //you must use the names from the original array

console.log(LastName, first1, city, favoriteSibling, sister);

//in fuctions
function printPerson(person) {
  //this is destructoring inside func
  const {
    first1,
    siblings: { brother, sister: Enemy },
  } = person;
  console.log(Enemy, first1, brother);
}

function printPerson2({ city, last: foo, siblings: { brother } }) {
  //this is destructoring inside the  func parameters
  console.log(foo, city, brother);
}
printPerson(object);
printPerson2(object);
