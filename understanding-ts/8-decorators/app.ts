////////////////////////AUTOBIND DECORATOR
const btn = document.querySelector('#btn')!;

//DECORATOR
function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const methodOnObject = descriptor.value;
  const changedDescriptor: PropertyDescriptor = {
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

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

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
  name: string;
  //   @PositiveNum
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
}

const form = document.querySelector('form')!;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameEL = document.querySelector('#name') as HTMLInputElement;
  const ageEL = document.querySelector('#age') as HTMLInputElement;

  const name = nameEL.value;
  const age = +ageEL.value;

  const newPerson = new Person(name, age);
  console.log(newPerson);
});
