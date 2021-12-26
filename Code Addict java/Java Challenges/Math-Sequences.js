// Arithmatic, Geometric or No sequence
// No negative nums

function mathSequence(array) {
  let arithmatic = new Set();
  let geometric = new Set();

  for (let i = 1; i < array.length; i++) {
    let number1 = array[i] - array[i - 1];
    arithmatic.add(number1);

    let number2 = array[i] / array[i - 1];
    geometric.add(number2);
  }

  if (arithmatic.size === 1) {
    return "Arithmatic";
  } else if (geometric.size === 1) {
    return "Goemetric";
  } else {
    return "Not a sequence";
  }
}

console.log(mathSequence([2, 4, 6, 8]));
//Arithmetic
console.log(mathSequence([3, 9, 27]));
//Geometric
console.log(mathSequence([11, 8, 6, 25]));
// -1
