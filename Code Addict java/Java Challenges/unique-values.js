//return tur only if values are unique, otherwise false
//using Array, Object, string method indexOf()

//1st way (Array)
function unique(string) {
  let values = [];

  for (let letter of string) {
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values.push(letter);
  }
  return true;
}

//2nd way (Objcet)
function uniqueO(string) {
  let valuesO = {};

  for (let letter of string) {
    if (valuesO[letter]) {
      return false;
    }
    valuesO[letter] = `exists`;
  }
  return true;
}

console.log(unique("qwerty"));
//treue
console.log(unique("qwertty"));
//false

console.log(uniqueO(`abcdef`));
//true
console.log(uniqueO(`abacdefb`));
//false
