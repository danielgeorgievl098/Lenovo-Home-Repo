"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var runnable = /** @class */ (function () {
    function runnable() {
    }
    runnable.prototype.run = function () {
        console.log(this);
        console.log('running');
    };
    return runnable;
}());
var logger = /** @class */ (function () {
    function logger(numb) {
        this.number1 = 0;
        this.number = numb;
    }
    logger.prototype.loger = function () {
        this.number1 = this.number1 + 1;
    };
    logger.prototype.info = function () {
        console.log(this);
    };
    return logger;
}());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.runnable = new runnable();
        this.name = name;
        this.logger = new logger(5);
    }
    return Animal;
}());
var dog = new Animal('Doggo');
dog.runnable.run();
dog.logger.loger();
dog.logger.loger();
console.log(dog.logger.number1);
console.log(dog.logger.number);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(breed) {
        var _this = _super.call(this, 'David') || this;
        _this.breed = breed;
        _this.logger2 = new logger(10);
        return _this;
    }
    return Dog;
}(Animal));
var dog2 = new Dog('Pug');
console.log(dog2);
dog2.logger.info();
dog2.runnable.run();
console.log(dog2.logger.number1);
dog2.logger.loger();
dog2.logger.loger();
console.log(dog2.logger.number1);
console.log(dog2.logger);
console.log(dog2.logger2);
console.log(dog2);
