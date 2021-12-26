//Array.from - NOT ON PROTOTYPE!

//from - returns an array object from an object
//in other words it turns sth array-ish into an array - string,nodeList,Set

//basic example
const word = `some word`;

const word2 = Array.from(word);
console.log(word2);

//example
const heading4 = document.querySelectorAll(`.text`);

const newHeading4 = Array.from(heading4); //puts all the h4 headings into an array

const friendInHeading = newHeading4.find(
  (item) => item.textContent === `Friend`
); //returns the heading that says `Friend`

console.log(newHeading4);
console.log(friendInHeading);

//pagination
const randomItems1 = Array.from({ length: 120 }, (_, index) => {
  return index;
});

console.log(randomItems1);

const itemsPerPage = 10;
const pages = Math.ceil(randomItems1.length / itemsPerPage);

const newRandomItems1 = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = randomItems1.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newRandomItems1);

//THIS IS IMOPRTANT BUT I DONT UNDERSTAND SHIT!!
