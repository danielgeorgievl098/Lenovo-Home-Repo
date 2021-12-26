//Longes Words

function longestWords(str) {
  let words = str.split(" ");
  let max = [];
  let size = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > size) {
      size = word.length; //if true sets the size to the length of the word
      max = [word]; // sets the array to the word
    } else if (word.length === size) {
      //if new word is even with size (aka. same length words)
      max = [...max, word]; // adds the new word to the array, without removing old word
    }
  }

  return [...max];
}

console.log(longestWords(`I woke up early today`));
console.log(longestWords(`I went straight to the beach`));
console.log(
  longestWords(
    `This is not as straightforwardA even if it might seem straightforwardB`
  )
);
