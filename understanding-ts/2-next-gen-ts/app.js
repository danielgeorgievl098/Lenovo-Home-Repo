"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
////////////////////////////////////////////////arrow functions
//here we are using normal arrow func
var printOutput = function (inp) { return console.log(inp); };
printOutput("Helloo");
// with fucntion type assigned
var printOutput2 = function (inp) { return console.log(inp); };
////////////////////////////////////////////////default function parameters
//the default params have to comply with the type we chose
var add = function (num1, num2) {
    if (num1 === void 0) { num1 = 5; }
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
};
console.log(add());
console.log(add(10, 10));
console.log(add(10));
////////////////////////////////////////////////SPREAD OPERATOR(...)
var hobbies = ["reading", "writing", "skiing"];
var activeHobbies = __spreadArray(["hiking"], hobbies, true);
console.log(activeHobbies);
var person = { firstName: "Mike", age: 30 };
var coppiedPerson = __assign(__assign({}, person), { job: "Mechanic" });
console.log(coppiedPerson);
coppiedPerson.firstName = "Jorge";
console.log(coppiedPerson);
console.log(person);
////////////////////////////////////////////////REST OPERATOR(...)
var add2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (cur, acc) {
        return (cur += acc);
    }, 0);
};
console.log(add2(10, 10, 1, 10));
////////////////////////////////////////////////ARRAY AND OBJECT DESCTRUC
var hobbie1 = hobbies[0], hobbie2 = hobbies[1], others = hobbies.slice(2);
console.log(hobbie1, hobbie2, others);
var firstName = person.firstName, howOld = person.age;
console.log(firstName, howOld);
//# sourceMappingURL=app.js.map