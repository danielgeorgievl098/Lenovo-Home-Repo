'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
////////////////////////////////////////////////COMPUTING USER NAMES///////////////////////////////////
console.log(
  `--------------------------------COMPUTING USER NAMES------------------------------`
);

const user = 'Steven Thomas Williams'; //stw

const createUserNames = function (accs) {
  accs.forEach(account => {
    //crates a new property on each object
    account.username = account.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);

////////////////////////////////////////////////CREATING DOM ELEMENTS///////////////////////////////////
console.log(
  `--------------------------------CREATING DOM ELEMENTS------------------------------`
);

const displayMovements = function (movement, sort = false) {
  //empties the container
  containerMovements.innerHTML = '';

  const movs = sort
    ? movements.slice().sort((curr, next) => curr - next)
    : movements;

  movs.forEach(function (mov, i) {
    const movementType = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      i + 1
    } ${movementType}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    //inserting html
    containerMovements.insertAdjacentHTML('afterbegin', html); //two inputs: first: where to place/ second: what we want to insert
  });
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = incomes;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = out;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .reduce((curr, acc) => acc + curr, 0);
  labelSumInterest.textContent = interest;
};

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calculateBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

///event handlers
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  //prevents from reloading page
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and 'welcome' msg
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    //updates UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    //add movement
    currentAccount.movements.push(loanAmount);

    //updae UI
    updateUI(currentAccount);

    //clear inp value
    inputLoanAmount.value = '';
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(acc => acc.username === inputTransferTo.value);
  //cleans input field
  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiver &&
    currentAccount.balance >= amount &&
    receiver?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);
    //updates UI
    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; //flips them every time
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
////////////////////////////////////////////////SIMPLE ARRAY METHODS///////////////////////////////////
console.log(
  `--------------------------------SIMPLE ARRAY METHODS------------------------------`
);
/////SLICE(does not mutate og array)

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); //returns a new array
console.log(arr.slice(2, 4)); //beggining par and end part(not included, so it just gets arr[2] and arr[3])
console.log(arr.slice(-1)); //starts from the back (last el)
console.log(arr.slice(1, -2)); //starts from the back (last el)

/////SPLICE(mutates og array)
// console.log(arr.splice(2)); //removes el of og array after arr[2]
console.log(arr.splice(1, 2)); //first param is start el. and second param. is how many items after first param. you want to delete
console.log(arr);

//////REVERSE( also mutates og array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['q', 'm', 'p', 'r', 'w'];
console.log(arr2.reverse());

////CONCAT(does not mutate)

let letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //same result and does not mutate any

///////JOIN
console.log(letters.join(' - '));

////////////////////////////////////////////////FOR EACH///////////////////////////////////
console.log(
  `--------------------------------FOR EACH------------------------------`
);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: Client deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Client withdrew ${movement}`);
  }
}

console.log(`----------forEach-----`);

movements.forEach(function (movement, i) {
  //first param: element/ second param: index/ third param: entire arr
  if (movement > 0) {
    console.log(`Movement ${i + 1}: Client deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: Client withdrew ${movement}`);
  }
});

////////////////////////////////////////////////FOREACH WITH MAPS AND SETS///////////////////////////////////
console.log(
  `--------------------------------FOREACH WITH MAPS AND SETS------------------------------`
);

///MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

///SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, key, map) {
  //key and value are the same
  console.log(`${key}: ${value}`);
});

///////////////////////////////////////CHALLENGE 1 ////////////////////////////
console.log(`------------------- CHALLENGE 1 ----------------------`);

const checkDogs = function (dogsJulia, dogsKate) {
  const noCats = [...dogsJulia].slice(1, -2);

  const onlyDogs = [...noCats, ...dogsKate];
  console.log(onlyDogs);

  onlyDogs.forEach(function (dog, i) {
    console.log(
      dog >= 3
        ? `Dog number ${i + 1} is an adult`
        : `Dog number ${i + 1} is a puppy`
    );
  });
};

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];
checkDogs(Julia, Kate);

////////////////////////////////////////////////MAP METHOD///////////////////////////////////
console.log(
  `--------------------------------MAP METHOD------------------------------`
);

const euroToUSD = 1.1;

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

//MAP always returns A NE ARRAY
// const converted = movements2.map(function (mov) {
//   return mov * euroToUSD;
// });
const converted = movements2.map(mov => mov * euroToUSD);
console.log(converted);

/////with FOR OF
const movements2ToUSD = [];
for (const mov of movements2) {
  movements2ToUSD.push(mov * euroToUSD);
}
console.log(movements2ToUSD);

///map parameters
const movementsDescriptions = movements2.map((mov, i) => {
  // if (mov > 0) {
  //   return `Movement ${i + 1}: you deposited ${mov} amount`;
  // } else {
  //   return `Movement ${i + 1}: you withdrew ${mov} amount`;
  // }

  return `Movement ${i + 1} you ${
    mov > 0 ? `deposited` : `withdrew`
  } ${mov} amount`;
});

console.log(movementsDescriptions);

////////////////////////////////////////////////FILTER METHOD///////////////////////////////////
console.log(
  `--------------------------------FILTER METHOD------------------------------`
);

const deposits = movements2.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements2.filter(mov => mov < 0);
console.log(deposits, withdrawals);

//FOR OF
const depositsFor = [];
for (const mov of movements2) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

////////////////////////////////////////////////REDUCE METHOD///////////////////////////////////
console.log(
  `--------------------------------REDUCE METHOD------------------------------`
);

const balance = movements2.reduce(function (acc, curr, i, arr) {
  return acc + curr;
}, 0);

console.log(balance);

//maximum value
const maxMov = movements2.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else return curr;
}, movements2[0]);

console.log(maxMov);
////////////////////////////////////////////////CALCULATING USER BALANCE///////////////////////////////////
console.log(
  `--------------------------------CALCULATING USER BALANCE------------------------------`
);

const calculateBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

////////////////////////////////////////////////CHALLENGE 2 ///////////////////////////////////
console.log(
  `--------------------------------CHALLENGE 2 -----------------------------`
);
const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (age) {
  const human = age
    .map(year => {
      if (year <= 2) {
        return year * 2;
      } else {
        return 16 + year * 4;
      }
    })
    .filter(year => year > 18);

  const avg =
    human.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / human.length;

  return avg;
};

console.log(calcAverageHumanAge(ages));

////////////////////////////////////////////////CHAINING METHODS ///////////////////////////////////
console.log(
  `--------------------------------CHAINING METHODS -----------------------------`
);

const usd = movements2.filter(mov => mov > 0).map(mov => mov * euroToUSD);
console.log(movements2, usd);

////////////////////////////////////////////////FIND METHOD ///////////////////////////////////
console.log(
  `--------------------------------FIND METHOD-----------------------------`
);

///FIND retursn the FIRST element that satisfies the condition, not an ARRAY

const firstWithdrawal = movements2.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

////////////////////////////////////////////////FIND INDEX METHOD ///////////////////////////////////
console.log(
  `--------------------------------FIND INDEX METHOD-----------------------------`
);

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //delete user
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
    //clear input fields
    inputCloseUsername.value = '';
    inputClosePin.value = '';
    inputClosePin.blur();
  }
});

////////////////////////////////////////////////SOME AND EVERY METHOD ///////////////////////////////////
console.log(
  `--------------------------------SOME AND EVERY METHOD-----------------------------`
);

console.log(movements2);

// EQUALITY
console.log(movements2.includes(-130));

// SOME CONDITION

const deposits2 = movements2.some(mov => mov > 0);
console.log(deposits2);

// EVERY CONDITION
//ONLY returns true if EVERY el. passes the condition

const deposits3 = movements2.every(mov => mov > 0);
console.log(deposits3);

////////////////////////////////////////////////FLAT AND FLATMAP ///////////////////////////////////
console.log(
  `--------------------------------FLAT AND FLATMAP-----------------------------`
);

const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8, 9];

console.log(arr3.flat());

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8, 9];

console.log(arrDeep.flat(2)); //you specify how many levels deep you wanna go

//gets all the arrays
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
//converts all arrays to a single array
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
console.log(overallBalance);

//this can all be chained into 1 line
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

console.log(overallBalance2);

//FLATMAP (combines the .flat() and .map() methods)
const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(overallBalance3);

////////////////////////////////////////////////SORTING///////////////////////////////////
console.log(
  `--------------------------------SORTING ARRAYS-----------------------------`
);

//mutates OG array
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

console.log(movements2);
// console.log(movements2.sort()); //converts to strings and then sorts

// // return > 0: B, A (switch order)
// // return < 0: A, B (keep order)

// movements2.sort((curr, next) => {
//   if (curr > next) return 1;
//   if (curr < next) return -1;
// });

movements2.sort((curr, next) => curr - next); //same as above
console.log(movements2);

//descending
// movements2.sort((curr, next) => {
//   if (curr > next) return -1;
//   if (next > curr) return 1;
// });

movements2.sort((curr, next) => next - curr); //same as above
console.log(movements2);

////////////////////////////////////////////////CREATING ARRAYS///////////////////////////////////
console.log(
  `--------------------------------CREATING ARRAYS-----------------------------`
);

const x = new Array(7); //when you pass just 1 arg, it creates an empty array with that many elements, you CANNOT use mthods on it
console.log(x);
console.log(x.map(() => 5));

//you can only call .fill() on it
x.fill(1, 3, 5); //first par: what you want to fill it with/ second&third:like slice
console.log(x);

//////  Array.from()
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

const y = Array.from({ length: 5 }, () => 23); //second parameter is a .MAP() method
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // "_" is considered a dummy parameter
console.log(z);

const dice = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * (6 - 1) + 1)
);
console.log(dice);

///with QUERYSELECTORALL

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    mov => Number(mov.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')]; //but not you have to call .MAP() separately
  console.log(movementsUI2);

  // const allMovs = movementsUI.map(mov =>
  //   Number(mov.textContent.replace('€', ''))
  // );  <----you can do it like this, or pass the .MAP() above as a second
});

/////////////////////////////////////PRACTICE
console.log(`========================= PRACTICE ========================`);

/////////1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(value => value > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);

////////////2

//first way

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;

//second way
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr > 1000 ? acc + 1 : acc), 0);
console.log(numDeposits1000);

/////////////////3
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, curr) => {
      curr > 0 ? (acc.deposits += curr) : (acc.withdrawals += curr);
      return acc;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(sums);

const { deposit, withdrawal } = sums;
console.log(deposits, withdrawals);

////////////////////4
//this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const exceptions = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'ands',
  ];

  const titleCase = title
    .toLocaleLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//////////////////////////////////FINAL CHALLENGE////////////////////////////////
console.log(
  `================================ FINAL CHALLENGE ===========================`
);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//////1
dogs.forEach(dog => (dog.reccomendedFood = dog.weight ** 0.75 * 28));
console.log(dogs);

///////2
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    dog.curFood > dog.reccomendedFood
      ? console.log(`Eats too much`)
      : console.log(`Eats too little`);
  }
});

//////3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.reccomendedFood);
const ownersEatTooLittle = dogs.filter(
  dog => dog.curFood < dog.reccomendedFood
);
console.log(ownersEatTooMuch, ownersEatTooLittle);

///////4
const string = ownersEatTooMuch
  .map(dog => dog.owners)
  .flat()
  .join();
console.log(string);
// ownersEatTooLittle.forEach(dog =>
//   console.log(`${dog.owners.join(' and ')} dogs eats too little`)
// );

/////5
console.log(dogs.some(dog => dog.curFood === dog.reccomendedFood));
/////6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.reccomendedFood * 0.9 &&
      dog.curFood < dog.reccomendedFood * 1.1
  )
);
///////7
const dogOkay = dogs.filter(
  dog =>
    dog.curFood > dog.reccomendedFood * 0.9 &&
    dog.curFood < dog.reccomendedFood * 1.1
);
console.log(dogOkay);
/////////8
const sortedDog = dogs
  .slice()
  .sort((curr, next) => curr.reccomendedFood - next.reccomendedFood);

console.log(sortedDog);

///////////////////////////////////////// CONVERTING AND CHECKING NUMBERS ////////////////////
console.log(
  ` ------------------------- CONVERTING AND CHECKING NUMBERS --------------`
);
