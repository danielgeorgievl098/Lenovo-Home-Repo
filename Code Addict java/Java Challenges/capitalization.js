function capitalize(string) {
  let words = string.split(" ").map((item) => {
    // let firstLetter = item.slice(0, 1);
    // let restOfWord = item.slice(1); //slice from 1 to end, so everything after 1st letter
    // firstLetter = firstLetter.toUpperCase();
    // return `${firstLetter}${restOfWord}`;

    return item.charAt(0).toUpperCase() + item.slice(1);
  });

  return words.join(` `);
}

console.log(capitalize(`I woke up early today, right`));
console.log(capitalize(`I went straight to the beach`));
