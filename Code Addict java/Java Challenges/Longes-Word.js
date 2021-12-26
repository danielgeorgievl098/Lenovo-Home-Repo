function longestWord(input) {
  let words = input.split(` `); //splits the word at spacebar
  let longestPhrase = ``;

  for (let word of words) {
    if (word.length > longestPhrase.length) {
      //on the first run, the first word is the longest and on every other run it compares the new with the previouss
      longestPhrase = word;
    }
  }
  return longestPhrase;
}

console.log(longestWord("I went to the beach yesterday"));
console.log(longestWord(" shablaamooooo i wa sd dfsdf fefwefwe"));
