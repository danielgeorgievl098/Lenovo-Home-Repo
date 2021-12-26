console.log(
  `------------------------------- BASICS-----------------------------`
);

const add = function (
  num1: number,
  num2: number,
  showresult: boolean,
  phrase: string
) {
  if (showresult) console.log(`${resultPhrase} ${num1 + num2}`);
};

const number1 = 4;
const number2 = 5.7;
const printResult = true;
const resultPhrase = `Result is....`;

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);

console.log(
  `------------------------------- OBJECT TYPES -----------------------------`
);

// const person:{
//     name:string,
//     age:number,
// }= {
//     name:'Daniel',
//     age:23
// }
const person = {
  name: "Daniel",
  age: 23,
};
console.log(person);

console.log(
  `------------------------------- TUPLES -----------------------------`
);

const author: {
  name: string;
  age: number;
  role: [number, string]; //this is a tuple, we want a special array with lenght:2 first a string and a num
} = {
  name: "Harry",
  age: 23,
  role: [2, "Author"],
};

console.log(
  `------------------------------- ENUMS -----------------------------`
);

//these implicitly have the values 0,1,2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Daniel",
  age: 23,
  hobbies: ["swimming", "reading"],
  role: Role.AUTHOR,
};

console.log(
  `------------------------------- UNION TYPES -----------------------------`
);

//in this case, imputs can be a num or str
const combine = function (imput1: number | string, imput2: number | string) {
  let result;
  if (typeof imput1 === "number" && typeof imput2 === "number") {
    result = imput1 + imput2;
  } else {
    result = imput1.toString() + imput2.toString();
  }
  return result;
};

console.log(combine(50, "Anna"));

console.log(
  `------------------------------- LITERAL TYPES -----------------------------`
);

//we are only allowing these 2 values to be used, if we assing anth else, we get an error
let literal: "Anna" | "Marry" = "Anna";
literal = "Marry";

console.log(literal);

console.log(
  `------------------------------- TYPE ALLIASES/CUSTOM TYPES -----------------------------`
);

// the variables where we use this type can only be number or boolean
type Combinable = number | boolean;

let alliase: Combinable = false;

// can only be Kata or Monika
type Friend = "Kata" | "Monika";

let friends: Friend = "Monika";

//you can also create more complex types
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

console.log(
  `------------------------------- FUNCTION RETURN TYPES AND VOID -----------------------------`
);

//we specify what kind of return type we want after the ()
function add2(n1: number, n2: number): number {
  return n1 + n2;
}

//this func has a void return (ie. we have no return statement)
function printResult2(num: number) {
  console.log(`Result:` + num);
}

printResult2(add2(55, 12));

console.log(
  `------------------------------- FUNCTIONS AS TYPES -----------------------------`
);

//whatever we store in this variable has to be a function with 2 num args and returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add2;

console.log(combineValues(4, 5));

console.log(
  `------------------------------- FUNCTIONS TYPES AND CALLBACKS -----------------------------`
);

//here we are specifying that the function expects a callBack function as an input, which in turn expect a number as an input and returns void
function addAndHandle(
  num1: number,
  num2: number,
  callBack: (num: number) => void
) {
  const result = num1 + num2;
  callBack(result);
}

//here we are passing in an anonymous func that just logs it's input
addAndHandle(60, 9, (result) => {
  console.log(result);
});

console.log(
  `------------------------------- THE UNKNOWN TYPE -----------------------------`
);
//unkown is similar to any, but it's less restrictive
//it's more commonly used, in order to not use 'any'
let username: unknown;

username = "Max";
username = 5;

console.log(
  `------------------------------- THE NEVER TYPE -----------------------------`
);

//similar to "void" we use it for func that NEVER have a return value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error seems to have occured", 690);
