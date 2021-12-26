console.log(`UNIQUE VALUES WITH SET()`);

function unique(str) {
  let tempStr = new Set();

  for (let char of str) {
    if (tempStr.has(char)) {
      return false;
    } else {
      tempStr.add(char);
    }
  }
  return true;
}

console.log(unique(`abcd`));
//return true
console.log(unique(`abcdade`));
//returns false
console.log(unique(`abcdefghjk`));
//true

console.log(`THIS IS ONE-LINER WITH SET()`);

function oneLiner(str) {
  return new Set(str).size === str.length;
}

console.log(oneLiner(`qwerty`));
//true
console.log(oneLiner(`abcdade`));
//false
