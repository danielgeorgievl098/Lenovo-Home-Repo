"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
////////////////////////AUTOBIND DECORATOR
const btn = document.querySelector('#btn');
//DECORATOR
function Autobind(target, methodName, descriptor) {
    const methodOnObject = descriptor.value;
    const changedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bound = methodOnObject.bind(this);
            return bound;
        },
    };
    return changedDescriptor;
}
class Printer {
    message = 'THIS WORKS';
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
btn.addEventListener('click', p.showMessage);
//this is how we would have to do it if we DIDN'T USE DECORATORS
// btn.addEventListener('click', p.showMessage.bind(p));
////////////////////////DECORATOR VALIDATION
//DECORATOR
// function Required() {}
// function PositiveNum() {}
// function Validate(obj: object) {}
class Person {
    //   @Required
    name;
    //   @PositiveNum
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameEL = document.querySelector('#name');
    const ageEL = document.querySelector('#age');
    const name = nameEL.value;
    const age = +ageEL.value;
    const newPerson = new Person(name, age);
    console.log(newPerson);
});
