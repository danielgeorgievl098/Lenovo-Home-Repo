function arraySum(arr) {
  let tempArray = arr.sort((a, b) => a - b); //this is a sorting algorithm a-b

  let largestNum = tempArray.pop(); //pops last item in array, i.e the largest in this case

  let number = 0;

  tempArray.forEach((item) => (number += item));

  return largestNum === number;
}

console.log(`This is array sum`);
console.log(arraySum([1, 6, 4, 2, 13]));
//returns true if 1+2+4+6=13
console.log(arraySum([1, 2, 4, 34, 22]));
//returns false 1+2+4+22=29 29!=34
