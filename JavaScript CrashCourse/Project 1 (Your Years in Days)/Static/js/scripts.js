//CHALLENGE 1
function AgeInDays() {
    var BirthYear = prompt('What is your Birthday?');
    var Days = 'Your age in days is approx.: ' + (2021 - BirthYear) * 365;

    var h1 = document.createElement('h1');

    var textAnswer = document.createTextNode(Days);

    h1.setAttribute('id', 'AgeInDays'); // sets h1's ID to AgeInDays
    h1.appendChild(textAnswer); // Appends the TextAnswer to h1 
    document.getElementById('flex-box-result').appendChild(h1); // appends the created h1 to "flex-box-result" from the undex doc.
}

function reset(){
    document.getElementById('AgeInDays').remove(); // removes the result from the function AgeInDays
}

//CHALLENGE 2 
function generateCat() {
    var image = document.createElement('img');                      //creates and element in the doc. called "img"
    var div = document.getElementById('flex-cat-gen');                  //obtains the div whose id is "flex-cat-get" 
    image.src = "https://i.pinimg.com/originals/e2/bb/5d/e2bb5d985f003efbd6d2300e4513c2f7.gif"      //sets the source of the image varialbe we created to the gif link
    div.appendChild(image);                                             //appends the image to the div whose ID is that of the actual div in the index 
}

//CHALLENGE 3 
function rpsGame(WhatYouClickedOn) {                                    //in the index we imput into this fucntion the img
    console.log(WhatYouClickedOn);
    
    var humanChoice, botChoice;                                       //creates the 2 variables
    humanChoice = WhatYouClickedOn.id;                               //sets the humanchoice to the id of the image(rock,paper,sciccors), on which you clicked
    botChoice = numberToChoice(randomNum()); 
    
    console.log('computer chose', botChoice);
    result = decideWinner(humanChoice, botChoice);                   //sets the result to the return value of the function
    console.log(result);
    
    message = finalMessage(result) 
    console.log(message);

    rpsFrontEnd(WhatYouClickedOn.id, botChoice, message);
}

function randomNum(){                                            //picks a random number from 0-2
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){                                    //uses the number from randomNum to pick between the three choices
    return['rock','paper','scissors'][number];
}

function decideWinner(WhatYouClickedOn, botChoice){             //takes as input your choice and the PC's 
    var rpsDatabase = {                                              // creates an object with all possible outcomes 
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0,},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0,},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0,}
    };

    var yourScore = rpsDatabase[WhatYouClickedOn][botChoice];                // this goes firstly into what you picked and then from the three scenarios of your decsion it returns what the computer picked 
    var computerScore = rpsDatabase[botChoice][WhatYouClickedOn];              // this is the score from the Pc's standpoint

    return [yourScore, computerScore];
}

function finalMessage( [yourScore, computerScore] ) {
    if (yourScore === 0) {
        return{'message': 'You lost!', 'color': 'red'};                 //returns an object which has the message and the color of the message
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {                                               // creatse an object/dictionary
        'rock': document.getElementById('rock').src,                    //gets the 'rock' from the  index by its ID and gives its source to the 'rock' in the object
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();                       //removes the images on click
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');                   //creates 3 divs in the index 
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=155 width = 155 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"  //enters the html of the human div and sets its src to the one in our object
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=155 width = 155 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage ['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" //sets the html of the message div we created and gets the "color" from the the object we created in the function above 

    document.getElementById('flex-box-rps-div').appendChild(humanDiv); //appens the human div we created to the already created div
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//CHALLENGE 4 

var all_buttons = document.getElementsByTagName('button');          //returns an array with all the buttons 

var copyAllButtons = [];

for (let i=0; i < all_buttons.length; i++){                         //loops through the array of buttons
    copyAllButtons.push(all_buttons[i].classList[1]);               //pushes all the buttons' second class(btn-danger/warning....) to the new array
}

function buttonColorChange(someInput) {
    if (someInput.value === 'red') {                             //if you choose red from the dropdown it runs the buttonsRed func. 
        buttonsRed();
    } else if (someInput.value === 'green') {                   // the value is the value we gave to each option of the "form" in the index
        buttonsGreen();
    } else if (someInput.value === 'reset') {
        buttonColorReset();
    } else if (someInput.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for( let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);  //loops through each button's class and removes from that classlist the second class(danger/warning/success)
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);  
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for( let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);                //adds the class from copyAllButtons that we made earlier
    }
}

function randomColors() {
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning']

    for( let i=0; i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);           //generates a random numb from 0-3

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);        //sets the class to one of the random from "choices"
    }
}

//CHALLENGE 5

let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score': 0 },
    'dealer':{'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score': 0 },
    'deck':['2','3','4','5','6','7','8','9','10','J','Q','K','A',],
    'cardsMap': {'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10,'J': 10,'Q': 10,'K': 10,'A': [1, 11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackjackGame['you'];                                                                       //this acts as a shortcut to the blackjackGame
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-btn').addEventListener('click', blackjackHit);                 //it listents if someone clicks the "hit" button and runs the func. blackjackHit
document.querySelector('#blackjack-stand-btn').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);

function blackjackHit() {  
    if (blackjackGame['isStand'] === false) {

        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
    
}


function randomCard() {                                                                                     //picks a random card from the 'deck' array 
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['deck'][randomIndex]
}

function showCard(card, activePlayer){
    if (activePlayer['score'] <= 21 ) {
        let cardImage = document.createElement('img');                                                      //creates an "image"    
        cardImage.src = `Static/images/${card}.png`;                                                               //sets its source to the images in the folder
        document.querySelector(activePlayer['div']).appendChild(cardImage);                                   //appends the image to "your-box"
        hitSound.play();
    }
}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] = true) {
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img')                            //gets all the 'images' from 'your-box'`and creats a "list" with them.
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img') 
        
        for (i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
        }

        for(i=0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';

        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }    
}

function updateScore(card, activePlayer) {
    if(card === 'A') {                                                                  //checks if card is an Ace
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {          //checks if score+Ace will go over 21
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];                //if it doesn't i will add 11
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];                //if it does it will add 1 
        }

    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];               //increments the score by the card value from the array cardsMap if card is not Ace
    }
    
}

function showScore(activePlayer){
    if (activePlayer['score'] > 21 ) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}


async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
   
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner(); 
    showResult(winner); 
}     


//updates wins,losses,draws
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21){
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;                                                        //updates score
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;                                                      //updates score
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score'] ) {
            blackjackGame['draws']++;                                                       //updates score
        }
        //when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;                                                              //updates score
        winner = DEALER;

        // when you both bust 
    } else if (YOU['score'] > 21 && DEALER['score'] > 21 ) {
        blackjackGame['draws']++;                                                           //updates score

    }
 
    return winner;    
}

function showResult(winner) {
    let message, messageColor;
    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins']; //updates score on the board below
            message = 'You Won!';
            messageColor = 'green'; 
            winSound.play();
        } else if (winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = "You Lost!";
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}