"use strict";

//////////////////////////////////////////1st example/////////////////////////////
//NUMBERS
const recursion1 = function (value) {
  //base case
  if (value > 10) {
    return "end of recursion";
  }

  //recursive call
  return recursion1(value + 1);
};

console.log(recursion1(2));

//////////////////////2nd example/////////////////////////////////////////
//PALINDROME

function isPalindrome(str) {
  const lent = str.length;

  //length will only be smaller/euqal to one only if the letter is a pali, because it slices and then cheks if the next letters are the same
  if (lent <= 1) {
    return `It's a palindrome`;
  }
  //if the first char does not equal the last char ends the recursion(base case)
  if (str[0] !== str[lent - 1]) return false;

  //slices the first and last char of the string, and then checks if the next ones are the same
  return isPalindrome(str.slice(1, -1));
}

const rect = isPalindrome(`level`);
console.log(rect);

//////////////////////3rd example/////////////////////////////////////////
//SUM OT NATURAL NUMBERS
const recursiveSum = function (num) {
  if (num <= 1) {
    return num;
  }
  return num + recursiveSum(num - 1);
};

console.log(recursiveSum(3));

//////////////////////4th  example//////////////////////////////////////////
//FIBONACHI SEQ
const fib = function (number) {
  if (number === 0 || number === 1) {
    return number;
  }
  return fib(number - 1) + fib(number - 2);
};

console.log(fib(10));
