'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ////1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);
// ///2
// const [gk, ...fieldPlayers] = [...players1];
// console.log(gk, fieldPlayers);
// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4
// const playersFinal = [...players1, 'Thiago', 'Coutinhno', 'Perisic'];
// console.log(playersFinal);
// //5
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);
// //6
// const printGoals = (...paramereters) => {
//   const players = [...paramereters];
//   console.log(`players ${players}, numbers of goals scored: ${players.length}`);
// };
// printGoals('Davies', 'Muler', 'Kimich', 'Lewandowvski');
// printGoals(...game.scored);
// //7
// console.log(game.odds.team1 > game.odds.team2 || 'Team1');

console.log(`----------SECOND CHALLENGE------------`);
/////1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
/////2
const value = Object.values(game.odds);
Number(value);
let oddAvg = 0;
for (const odd of value) {
  oddAvg += odd / value.length;
}
console.log(oddAvg);
//3

console.log(`----------THIRD CHALLENGE------------`);
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

///1
let events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
//3
console.log(`an event happened every ${90 / gameEvents.size} minutes`);

//4
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FISRT' : 'SECOND';

  if (key < 45) {
    console.log(`[${half} HALF]: ${value}`);
  } else console.log(`[${half} HALF]: ${value}`);
}
