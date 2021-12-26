'use strict';
//DOM = DOCUMENT OBJECT MANIPULATION

//////////////////////CLICK EVENTS

//VARIABLES
let randomNum = Math.floor(Math.random() * 20);

let score = 20; //easier to create var than doc.que everywhere
let highscore = 0;

//we craete a func so we don't use doc.que everywhere
const displayMessage = function (inputMessage) {
  document.querySelector('.message').textContent = inputMessage;
};

//CHECK CLICK EVENT
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value); //stores the user's guess into the variable as a number

  ////////GAME LOGIC////////////

  //if no guess
  if (!userGuess) {
    displayMessage('No input detected 😢😢');

    //if guess is correct
  } else if (userGuess === randomNum) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;

    displayMessage(' Congratulations! You Guessed Right!! 🎉🎉🎉');

    //sets up highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //if guess bigger/smaller
  } else if (userGuess !== randomNum) {
    //checks if user has any attempts left
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   userGuess > randomNum ? ' Number too BIG!!⬇⬇' : 'Number too SMALL!!⬇⬇';
      displayMessage(
        userGuess > randomNum ? ' Number too BIG!!⬇⬇' : 'Number too SMALL!!⬇⬇'
      );

      //decreases score every wrong answer
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //if user has no more attempts
      displayMessage('You LOST! 😢😢');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//RESET BUTTON
const reset = document.querySelector('.again');
reset.addEventListener('click', () => {
  score = 20;
  randomNum = Math.floor(Math.random() * 20);

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage(' Start Guessing..');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
