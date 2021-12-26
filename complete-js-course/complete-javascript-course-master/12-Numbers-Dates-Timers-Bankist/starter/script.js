'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-10-17T14:43:26.374Z',
    '2021-10-19T18:49:59.371Z',
    '2021-10-20T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2021-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-10-17T14:43:26.374Z',
    '2021-10-19T18:49:59.371Z',
    '2021-10-20T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = date.getMonth() + 1;
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTime = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //on each call print remaining time
    labelTimer.textContent = `${min}:${sec}`;

    //decrease with 1 sec
    time--;

    //when time = 0, stop timer and log out
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }
  };
  //set time to 5 min
  let time = 10;
  //call timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// //Fake Always Logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = '100';

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //craete current date
    const currDate = new Date();
    const day = `${currDate.getDate()}`.padStart(2, 0);
    const month = currDate.getMonth() + 1;
    const year = currDate.getUTCFullYear();
    const hour = currDate.getUTCHours();
    const minutes = currDate.getMinutes();
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTime();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTime();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTime();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e, acc) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

////////////////////////////////////////////////// CONVERTING AND CHEKING NUMBERS //////////////////
console.log(
  `------------------------- CONVERTING AND CHEKING NUMBERS ----------------------------`
);

///all numbers in JS are floats
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); //JS uses a base-10 system, so things like these are bugs we cannot fix

////Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e25'));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

console.log(Number.isNaN(25));
console.log(Number.isNaN('2'));
console.log(Number.isNaN(+'dss'));
console.log(Number.isNaN(23 / 0));

console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));

////////////////////////////////////////////////// MATH AND ROUNDING //////////////////
console.log(
  `------------------------- MATH AND ROUNDING----------------------------`
);

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
//cubit root
console.log(8 ** (1 / 3));

console.log(Math.max(4, 2, 6, 8, 3, 16, 89, 102));
console.log(Math.min(4, 2, '6', 8, 3, 16, 89, 102));

console.log(Math.trunc(Math.random() * 6) + 1);

//Rounding Numbers
console.log(Math.trunc(23.4));
console.log(Math.round(23.6));
console.log(Math.round(23.3));
console.log(Math.ceil(23.2));
console.log(Math.ceil(23.6));

////////////////////////////////////////////////// THE REMAINDER OPERATOR //////////////////
console.log(
  `------------------------- THE REMAINDER OPERATOR----------------------------`
);

console.log(5 % 2);
console.log(8 % 3);
console.log(6 % 3);

const isEven = n => n % 2 === 0;

console.log(isEven(6));
console.log(isEven(5));
console.log(isEven(10));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

////////////////////////////////////////////////// WORKING WITH BIGINT //////////////////
console.log(
  `------------------------- WORKING WITH BIGINT----------------------------`
);

//biggest num that JS can represent
console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(14345345346136435646673163456452674256);
console.log(14345345346136435646673163456452674256n); // "n" converts it ot a BigInt

console.log(BigInt(12432432451354365546456745735731));

//Operations
console.log(100000n + 100000n);
console.log(312321432578241287934524n * 146349672642387532571n);
// console.log(312321432578241287934524n * 146349672642387532571); cannot mix BigInt and normal nums

console.log(10n / 3n);
console.log(10 / 3);

////////////////////////////////////////////////// CREATING DATES //////////////////
console.log(
  `------------------------- CREATING DATES ----------------------------`
);

//Creating a date
const now = new Date();
console.log(now);

console.log(new Date(`Oct 20 2021 09:48:30`));
console.log(new Date(`Jan 31, 2021`));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 0, 31, 19, 23, 10));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates

const future = new Date(2037, 0, 31, 19, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

const milSecPassed = new Date(2117038980000);
console.log(milSecPassed);

console.log(Date.now());

future.setFullYear(2099);
console.log(future);

////////////////////////////////////////////////// OPERATIONS WITH DATES //////////////////
console.log(
  `------------------------- OPERATIONS WITH DATES ----------------------------`
);
console.log(future);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);
console.log(days2); //should be -10 but Math.abs() gets absolute value

////////////////////////////////////////////////// TIMERS //////////////////
console.log(`------------------------- TIMERS ----------------------------`);

///////// setTimeout
setTimeout(() => console.log(`Here is your pizza 🍕🍕`), 3000);
console.log(`Waiting for pizza......`);

setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your hamburger with ${ing1} and ${ing2} 🍔🍔`),
  4000,
  'French Fries',
  'Beef'
); // arguments are passed after the delay timer

const ingredients = ['Pickles', 'Salami'];
const burger = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your hamburger with ${ing1} and ${ing2} 🍔🍔`),
  4000,
  ...ingredients
); // arguments are passed after the delay timer

//////////// setInterval

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 10000); //function executes every time the timer expires
