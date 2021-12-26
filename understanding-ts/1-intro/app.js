console.log("------------------------------- BASICS-----------------------------");
var add = function (num1, num2, showresult, phrase) {
    if (showresult)
        console.log(resultPhrase + " " + (num1 + num2));
};
var number1 = 4;
var number2 = 5.7;
var printResult = true;
var resultPhrase = "Result is....";
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
console.log("------------------------------- OBJECT TYPES -----------------------------");
// const person:{
//     name:string,
//     age:number,
// }= {
//     name:'Daniel',
//     age:23
// }
var person = {
    name: "Daniel",
    age: 23
};
console.log(person);
console.log("------------------------------- TUPLES -----------------------------");
var author = {
    name: "Harry",
    age: 23,
    role: [2, "Author"]
};
console.log("------------------------------- ENUMS -----------------------------");
//these implicitly have the values 0,1,2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person2 = {
    name: "Daniel",
    age: 23,
    hobbies: ["swimming", "reading"],
    role: Role.AUTHOR
};
console.log("------------------------------- UNION TYPES -----------------------------");
//in this case, imputs can be a num or str
var combine = function (imput1, imput2) {
    var result;
    if (typeof imput1 === "number" && typeof imput2 === "number") {
        result = imput1 + imput2;
    }
    else {
        result = imput1.toString() + imput2.toString();
    }
    return result;
};
console.log(combine(50, "Anna"));
console.log("------------------------------- LITERAL TYPES -----------------------------");
//we are only allowing these 2 values to be used, if we assing anth else, we get an error
var literal = "Anna";
literal = "Marry";
console.log(literal);
console.log("------------------------------- TYPE ALLIASES/CUSTOM TYPES -----------------------------");
var alliase = false;
var friends = "Monika";
var u1 = { name: "Max", age: 30 };
console.log("------------------------------- FUNCTION RETURN TYPES AND VOID -----------------------------");
//we specify what kind of return type we want after the ()
function add2(n1, n2) {
    return n1 + n2;
}
//this func has a void return (ie. we have no return statement)
function printResult2(num) {
    console.log("Result:" + num);
}
printResult2(add2(55, 12));
console.log("------------------------------- FUNCTIONS AS TYPES -----------------------------");
//whatever we store in this variable has to be a function with 2 num args and returns a number
var combineValues;
combineValues = add2;
console.log(combineValues(4, 5));
console.log("------------------------------- FUNCTIONS TYPES AND CALLBACKS -----------------------------");
//here we are specifying that the function expects a callBack function as an input, which in turn expect a number as an input and returns void
function addAndHandle(num1, num2, callBack) {
    var result = num1 + num2;
    callBack(result);
}
//here we are passing in an anonymous func that just logs it's input
addAndHandle(60, 9, function (result) {
    console.log(result);
});
console.log("------------------------------- THE UNKNOWN TYPE -----------------------------");
//unkown is similar to any, but it's less restrictive
//it's more commonly used, in order to not use 'any'
var username;
username = "Max";
username = 5;
console.log("------------------------------- THE NEVER TYPE -----------------------------");
//similar to "void" we use it for func that NEVER have a return value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("I'm watchinng");
generateError("An error seems to have occured", 690);
