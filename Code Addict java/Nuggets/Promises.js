//async await
// Pending, Rejected, Fulfilled

const myNum = 2;

const pledge = new Promise((resolve, reject) => {
  const randomNUm = Math.floor(Math.random() * 3);

  if (randomNUm === myNum) {
    resolve(`This is the text inside resolve, so that means number  matches`);
  } else {
    reject(`This is the text inside the reject, so the number did not match`);
  }
});

console.log(pledge);

//accessing the values in resolve and reject

pledge.then((text) => console.log(text));
pledge.catch((text) => console.log(text));
