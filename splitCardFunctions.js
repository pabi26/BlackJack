import {playerCards, newDeck} from "./deck.js";
import { calculateScore, dealerScore  } from "./calculateScore.js";
let firstHand = [];
let secondHand = [];
let firstHandScore = [];
let secondHandScore = [];
let firstHandBust = false
let secondHandBust = false
let isSplit = false
let playerFirstHand = document.getElementById('player-first-hand');
let playerSecondHand = document.getElementById('player-second-hand');
let firstHandSum = document.getElementById('first-hand-sum');
let secondHandSum = document.getElementById('second-hand-sum');
const firstHandHitBtn = document.getElementById('first-hand-hit-btn')
const firstHandStandBtn = document.getElementById('first-hand-stand-btn')
const secondHandHitBtn = document.getElementById('second-hand-hit-btn')
const secondHandStandBtn = document.getElementById('second-hand-stand-btn')
const dealerHitBtn = document.getElementById('dealer-hit-btn')
let messageOne = document.getElementById('messageOne');
let messageTwo = document.getElementById('messageTwo')


//funtion to decide if cards can be split

function canSplitCards() {
    let firstCard = calculateSplitCardScore(playerCards[0]);
    let secondCard = calculateSplitCardScore(playerCards[1]);
    console.log(firstCard);
    console.log(secondCard);
    if (firstCard === secondCard) {
        console.log('can split')
        document.getElementById('split-btn').disabled = false
    } else {
        console.log("can't split")
    }

}


//function to split cards
function split() {
    firstHand.push(playerCards[0]);
    secondHand.push(playerCards[1]);
    playerFirstHand.textContent = firstHand;
    playerSecondHand.textContent = secondHand;
    calculateFirstHandScore()
    calculateSecondHandScore() 
    isSplit = !isSplit
}


//function to get split card score

function calculateSplitCardScore(cardValue) {
    let score = 0;
    let aces = 0;
    if (cardValue === 'jack of hearts' || cardValue === 'queen of hearts' || cardValue === 'king of hearts'
        || cardValue === 'jack of diamonds' || cardValue === 'queen of diamonds' || cardValue === 'king of diamonds'
        || cardValue === 'jack of spades' || cardValue === 'queen of spades' || cardValue === 'king of spades'
        || cardValue === 'jack of clubs' || cardValue === 'queen of clubs' || cardValue === 'king of clubs') {
        score = 10;
    } else if (cardValue === 'ace of hearts' || cardValue === 'ace of diamonds'
        || cardValue === 'ace of spades' || cardValue === 'ace of clubs') {
        score = 11;
        aces++;  
    } else {
        score = parseInt(cardValue);
    }
    return score;
}

//function to calcurlate first hand score

function calculateFirstHandScore() {
    firstHandScore = calculateScore(firstHand)
    firstHandSum.textContent = 'First Hand Score: ' + firstHandScore;
}

//function to calcurlate second hand score

function calculateSecondHandScore() {
    secondHandScore = calculateScore(secondHand)
    secondHandSum.textContent = 'Second Hand Score: ' + secondHandScore;
}


//function to get first hand
function getFirstHand(){
    if(firstHandScore < 21) {
        hitFirstHand()
        if (firstHandScore > 21) {
            firstHandBusted() 
        }
    }
}


//function to hit first hand
function hitFirstHand(){
    firstHand.push(newDeck.shift());
    playerFirstHand.textContent = firstHand;
    firstHandScore = calculateScore(firstHand);
    firstHandSum.textContent = 'First Hand Score:' + firstHandScore;
    
}

//function if first hand bust
function firstHandBusted() {
    if(firstHandScore > 21){
        firstHandBust = true
        firstHandHitBtn.disabled = true;
        firstHandStandBtn.disabled = true;
        secondHandHitBtn.disabled = false;
        secondHandStandBtn.disabled = false;
        messageOne.textContent = 'First hand busts!';
    } 
}



//function to get second hand
function getSecondHand(){
    if(secondHandScore < 21) {
        hitSecondHand()
        if (secondHandScore > 21) {
            secondHandBusted() 
        }
    }
}


//function to hit first hand
function hitSecondHand(){
    secondHand.push(newDeck.shift());
    playerSecondHand.textContent = secondHand;
    secondHandScore = calculateScore(secondHand);
    secondHandSum.textContent = 'First Hand Score:' + secondHandScore;
}


//function if second hand bust
function secondHandBusted() {
    if(secondHandScore > 21){
        secondHandBust = true
        secondHandHitBtn.disabled = true;
        secondHandStandBtn.disabled = true;
        messageTwo.textContent = 'Second hand busts!';
    }
}



function standFirstHand(){
    if(firstHandStandBtn.clicked = true){
        firstHandHitBtn.disabled = true
        firstHandStandBtn.disabled = true
        secondHandHitBtn.disabled = false
        secondHandStandBtn.disabled = false
    }    
}


function standSecondHand(){
    if(secondHandStandBtn.clicked = true){
        secondHandHitBtn.disabled = true
        secondHandStandBtn.disabled = true
        secondHandHitBtn.disabled = true
        secondHandStandBtn.disabled = true
        if(dealerScore < 17) {
            document.getElementById('dealer-hit-btn').disabled = false
        }
    }    
}


function bothHandsBust() {
    if (firstHandBust === true && secondHandBust === true) {
        console.log('Both hands bust, Dealer Wins!')
    }
}



function determineFirstHandWinner(){
    if(dealerScore <= 21){
        if(dealerScore > firstHandScore){
            messageOne.textContent = "Dealer Wins"
        } else if (firstHandScore > dealerScore){
            messageOne.textContent = "First Hand Wins"
        } else if( dealerScore === firstHandScore){
            messageOne.textContent = "push"
        }
    }
}


function determineSecondHandWinner(){
    if(dealerScore <= 21){
        if(dealerScore > secondHandScore){
            messageTwo.textContent = "Dealer Wins"
        } else if (secondHandScore > dealerScore){
            messageTwo.textContent = "Second Hand Wins"
        } else if( dealerScore === secondHandScore){
            messageTwo.textContent = "push"
        }
    }
}

function splitHandWinner(){
    if (secondHandStandBtn.clicked = true & dealerHitBtn.disabled){
        determineFirstHandWinner()
        determineSecondHandWinner()
    } 
}












function resetSplithands() {
    firstHand = [];
    secondHand = [];
    playerFirstHand.textContent = '';
    playerSecondHand.textContent = '';
    firstHandSum.textContent = '';
    secondHandSum.textContent = '';
    messageOne.textContent = '';
    messageTwo.textContent = '';
    document.getElementById('player-first-split-hand').style.display = 'none';
    document.getElementById('player-second-split-hand').style.display = 'none';
}












export {canSplitCards,
        split,
        getFirstHand,
        getSecondHand, 
        standFirstHand, 
        standSecondHand, 
        splitHandWinner, 
        resetSplithands,
        firstHandScore, 
        secondHandScore,
        firstHand,
        secondHand,
        playerFirstHand,
        playerSecondHand,
        isSplit
        };