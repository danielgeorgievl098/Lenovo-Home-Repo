// Spread Operator (...)
//Split into single items and COPY them

const udemy = `udemy text`;
const letters = [...udemy];
console.log(letters);

const boys = [`John`, `Mickle`, `Mike`, `Jim`, `Jack`];
const girls = [`Hannah`, `Jessie`, `Mindy`, `Sarah`];

const bestFriend = `Santa`;

const friendsList = [...boys, bestFriend, ...girls];
console.log(friendsList);

//reference
const newFriends = friendsList;
newFriends[0] = `Nancy`; // because you are referencing it above, Nancy is now changed in both arrays, not just newFriends
console.log(newFriends);

//copy
const newFriends2 = [...friendsList];
newFriends2[0] = `NOT Nancy`; //because we copied the array, making changes to the new one doesn't effect the old one
console.log(newFriends2);

//objects
const genericPerson2 = { name: `Leyla`, occupation: `disoccupied` };
const newGenericPerson2 = {
  ...genericPerson2,
  name: `Cassandra`, //changes name
  city: `Los Angeles`, //adds city
};

console.log(newGenericPerson2);
