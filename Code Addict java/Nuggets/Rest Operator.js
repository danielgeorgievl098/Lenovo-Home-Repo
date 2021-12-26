// Rest Operator (...)
//to gather or collect items
// used when destructoring and in functions
//placement is important(it should always be at the end bc. "rest" of the items)/ be careful with same name
//rest is used when DECLARING a func/ spread when INVOKING a func

//arrays
const fruits2 = [`pear`, `apple`, `berry`, `cherry`, `cantalope`];
const [placeholder1, ...restOfFruits2] = fruits2; //name is after the ... also it returns an array

console.log(restOfFruits2, placeholder1);

//objects
const genericPerson1 = {
  firstName: `Bobby`,
  lastName: `Dylan`,
  occupation: `Lazy 24/7`,
};

const { firstName, occupation, ...restOfGenericPerson } = genericPerson1;
console.log(occupation, restOfGenericPerson);

// functions(only when DECLARING)
const getAverage = (student, ...score) => {
  //here we are using REST
  const average =
    score.reduce((acc, curr) => {
      return (acc += curr);
    }, 0) / score.length;

  console.log(average);
};

// getAverage(genericPerson1.firstName, 5, 6, 2, 4, 5, 5, 3); //this can be one way to do it, or we can use SPREAD operator like we do below

const testScores = [5, 6, 2, 4, 5, 5, 3];
getAverage(genericPerson1.lastName, ...testScores); //here we are using SPREAD
