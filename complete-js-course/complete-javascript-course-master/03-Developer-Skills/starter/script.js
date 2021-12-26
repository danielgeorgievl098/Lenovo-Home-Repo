// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let sentence = [];
  for (let i = 0; i < arr.length; i++) {
    sentence.push(`...${arr[i]}\xB0C in ${i + 1} days`);
  }
  let text = sentence.join("");
  console.log(text);
};

printForecast(data1);
