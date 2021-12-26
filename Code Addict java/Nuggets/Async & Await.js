//allows us to write asynchronist code in synchronised fassion/ similar to promises
// async must be present and it always returns a PROMISE
// await waits till primse is settled

const example = async () => {
  return `some random text`;
};
console.log(example());

async function awaitExample() {
  const result = await example();
  console.log(`${result} with await example`);
}
awaitExample();

//Harder example

const users2 = [
  { id: 1, name: `Chilian` },
  { id: 2, name: `Harry` },
  { id: 3, name: `Hermione` },
];

const articles = [
  { userId: 1, articles: [`one`, `two`, `three`] },
  { userId: 2, articles: [`five`, `isx`, `seven`] },
  { userId: 3, articles: [`eight`, `nine`, `ten`] },
];

function getUser(someName) {
  return new Promise((resolve, reject) => {
    const userVarible = users2.find((user) => user.name === someName); //checks if the input name is in user2 array

    if (userVarible) {
      return resolve(userVarible);
    } else {
      reject(`There is no such user ${someName}`);
    }
  });
}

function getArticle(userIdInput) {
  return new Promise((resolve, reject) => {
    const articleVariable = articles.find(
      (user) => user.userId === userIdInput //checks if in articles there is a matching userID
    );

    if (articleVariable) {
      return resolve(articleVariable.articles);
    } else {
      reject(`Sorry, wrong User ID`);
    }
  });
}

//without ASYNC
// getUser(`Harry`)
//   .then((user) => getArticle(user.id))
//   .then((someArticle) => console.log(someArticle))
//   .catch((err) => console.log(err));

//with ASYNC
const getData = async () => {
  const user = await getUser(`Harry`);

  if (user) {
    const articles = await getArticle(user.id);
    console.log(articles);
  }
};
getData();
