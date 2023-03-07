import {dealCards, reset} from "./deck.js"
import { canSplitCards, split,getFirstHand, getSecondHand, standFirstHand, standSecondHand,splitHandWinner, firstHandScore, secondHandScore } from "./splitCardFunctions.js"
import { calculateDealerScore, calculatePlayerScore, dealerScore, playerScore} from "./calculateScore.js"
import { getPlayerCard, getDealerCard, stand, winner, message} from "./functions.js"
import { getRulesHtml } from "./rules.js"
import { getTipHtml } from "./tips.js"


const firstPage = document.getElementById('first-page')
const rulesPage = document.getElementById('rules-page')
const gameDisplay = document.getElementById('game-display')

const dealCardsBtn = document.getElementById('deal-cards-btn') ;
const dealerHitBtn = document.getElementById('dealer-hit-btn');
const hitBtn = document.getElementById('hit-btn');
const standBtn = document.getElementById('stand-btn');
const splitBtn = document.getElementById('split-btn');
const resetBtn = document.getElementById('restart-btn');

let toggle = document.getElementById('limit-switch');
let isChecked = document.getElementById('limit-switch');

    

const userName = document.getElementById('username');
const startGame = document.getElementById('start-game');


startGame?.addEventListener("click", function(event){
    console.log('clicked');
    if (!userName || !userName.value) {
        event.preventDefault();
        document.getElementById('warning').textContent = "Enter Player Name";
    } else {
        firstPage.style.display = 'none'
        rulesPage.style.display = 'block'
    }
});

document.getElementById('yes').addEventListener('click', function (){
    rulesPage.style.display = 'none'
    gameDisplay.style.display = 'block'
})

document.getElementById('no').addEventListener('click', function (){
    rulesPage.style.display = 'none'
    firstPage.style.display = 'flex'
})
document.getElementById('back').addEventListener('click', function() {
    rulesPage.style.display = 'block'
    gameDisplay.style.display = 'none'
})



// deal cards button
dealCardsBtn.addEventListener('click', function(){
    dealCards()
    calculatePlayerScore()
    calculateDealerScore()
    displayOptions()
    canSplitCards()
    if (dealerScore === 21){
        message.textContent = 'Dealer Wins'
        hitBtn.disabled = true
        standBtn.disabled = true
        splitBtn.disabled = true
    } else if ( playerScore === 21){
        message.textContent = 'Player Wins'
        hitBtn.disabled = true
        standBtn.disabled = true
    }
})

function displayOptions(){
    dealCardsBtn.style.display = "none"
    message.textContent = 'Would you like to Hit, Stay or Split?';
    dealerHitBtn.disabled = false
    hitBtn.disabled = false
    standBtn.disabled = false
    dealerHitBtn.disabled = true
}





//hit player button
hitBtn.addEventListener('click', function(){
    getPlayerCard()
})



// hit dealer button
dealerHitBtn.addEventListener('click', function(){
    getDealerCard()
    
})



//stand button

standBtn.addEventListener('click', function(){
    stand() 
    if(dealerScore < 17){
        dealerHitBtn.disabled = false
    } else {
        winner()
    }
})


//split button

splitBtn.addEventListener('click', function(){
    document.getElementById('player-hand-1').style.display = 'none';
    document.getElementById('player-first-split-hand').style.display =' flex';
    document.getElementById('player-second-split-hand').style.display = 'flex';
    document.getElementById('first-hand-hit-btn').disabled = false
    document.getElementById('first-hand-stand-btn').disabled = false
    split()
})


//First Hand Hit Button
document.getElementById('first-hand-hit-btn').addEventListener('click', function() {
    getFirstHand()
})


//First Hand Stand Button
document.getElementById('first-hand-stand-btn').addEventListener('click', function() {
    standFirstHand()
})


//Second Hand Hit Button
document.getElementById('second-hand-hit-btn').addEventListener('click', function() {
    getSecondHand()

})

// Second Hand Stand Button
document.getElementById('second-hand-stand-btn').addEventListener('click', function() {
    standSecondHand()
    if(dealerScore < 17){
        dealerHitBtn.disabled = false
    } else{
        splitHandWinner()
    }
})





// reset button

resetBtn.addEventListener('click', function(){
    console.log('clicked')
    reset()
})




document.getElementById('rules-btn').addEventListener('click', function(){
    document.getElementById('rulesDisplay').style.display = "block"
})

document.getElementById('close-rules').addEventListener('click', function(){
    document.getElementById('rulesDisplay').style.display = "none"
})



document.getElementById('tips-btn').addEventListener('click', function(){
    document.getElementById('tipsDisplay').style.display = "block";

})

document.getElementById('close-tips').addEventListener('click', function(){
    document.getElementById('tipsDisplay').style.display = "none"
})

   





isChecked.addEventListener('change', function(){
    if(isChecked.checked) {
        console.log('Light');
        document.getElementById('game-display').style.backgroundImage = "url('images/red.jpeg')";
        document.getElementById('red').style.color = "black"
        document.getElementById('black').style.color = "gold"
    } else {
        document.getElementById('game-display').style.backgroundImage = "url('images/depositphotos_62438143-stock-illustration-luxury-black-poker-background-with.jpeg')";
        document.getElementById('red').style.color = "gold"
        document.getElementById('black').style.color = "black"
    }
});


