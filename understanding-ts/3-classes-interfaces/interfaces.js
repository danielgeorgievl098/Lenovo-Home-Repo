"use strict";
///////////////////////////////INTERFACES INTRO
console.log("--------------------------------------- INTERFACES INTRO ------------------------------------");
var user1;
//user1 MUST satisfy the definiton of Person interface
user1 = {
    name: "Hagrid",
    age: 55,
    greet: function (phrase) {
        console.log(phrase + ", Harry!");
    },
};
user1.greet("Hello");
///////////////////////////////INTERFACES WITH CLASSES
console.log("--------------------------------------- INTERFACES WITH CLASSES ------------------------------------");
// a CLASS can IMPLEMENT MULTIPLE INTERFACES, BUT CAN INHERIT ONLY FROM ONE OTHER CLASS
// the CLASS CAN have it's own properties(age), but it has to SATISFY THE MINIMAL REQUIREMENTS of the INTERFACE
var Player = /** @class */ (function () {
    function Player(name, age) {
        this.name = name;
        this.age = age;
    }
    Player.prototype.greet = function () {
        console.log("Hello there, " + this.name);
    };
    return Player;
}());
var user2 = new Player("Snape", 55);
user2.greet();
///////////////////////////////EXTENDING INTERFACES
console.log("--------------------------------------- EXTENDING INTERFACES  ------------------------------------");
//because we implement and interface that EXTENDS 2 other interfaces, we must satisfy the needs of ALL 3 INTERFACES
var Player2 = /** @class */ (function () {
    function Player2(name, age) {
        this.name = name;
        this.age = age;
    }
    Player2.prototype.greeting = function () {
        console.log("This is Interface Inheritance");
    };
    return Player2;
}());
var player = new Player2("Dumbledore", 60);
player.greeting();
console.log(player);
///////////////////////////////INTERFACES AS FUNCTION TYPES
console.log("--------------------------------------- INTERFACES AS FUNCTION TYPES  ------------------------------------");
var add1 = function (num1, num2) { return num1 + num2; };
console.log(add1(5, 6));
var add2 = function (num1, num2) { return num1 + num2; };
console.log(add2(5, 6));
//they both do the same, it's down to PREFERENCE
///////////////////////////////OPTIONAL PARAMETERS AND PROPERTIES
console.log("---------------------------------------  OPTIONAL PARAMETERS AND PROPERTIES  ------------------------------------");
//# sourceMappingURL=interfaces.js.map