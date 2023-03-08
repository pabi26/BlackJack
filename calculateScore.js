import { firstHandScore, secondHandScore } from "./splitCardFunctions.js";
import {playerCards, dealerCards, dealerHand, playerHand, newDeck } from"./deck.js";
let playerSum = document.getElementById("player-sum");
let dealerSum = document.getElementById("dealer-sum");
let playerScore = [];
let dealerScore = [];




// calculate score
let calculateScore = (hand) => {
    let score = 0;
    let aces = 0
    for (let i = 0; i < hand.length; i++) {
      let cardValue = hand[i].split(' ')[0];
      if (cardValue === 'jack' || cardValue === 'queen' || cardValue === 'king') {
        score += 10;
      } else if (cardValue === 'ace') {
        score += 11;
        aces++;  
      } else {
        score += parseInt(cardValue);
      }
    }
    while (score > 21 && aces > 0){
        score -= 10;
        aces--;
    }
    return score;
};


  
function calculatePlayerScore(){
    playerScore = calculateScore(playerCards);
    playerSum.textContent = 'Player score: ' + playerScore;
}


function calculateDealerScore(){
    dealerScore = calculateScore(dealerCards);
    dealerSum.textContent = 'Dealer score: ' + dealerScore;
}




function hit(){
    if(playerScore < 21){
        playerCards.push(newDeck.shift());
        playerHand.textContent = playerCards;
        playerScore = calculateScore(playerCards);
        playerSum.textContent = 'Player score: ' + playerScore;
    }
}



function hitDealer(){
    if(dealerScore < 17) {
        dealerCards.push(newDeck.shift());
        dealerHand.textContent = dealerCards;
        dealerScore = calculateScore(dealerCards);
        dealerSum.textContent = 'Dealer score: ' + dealerScore;
    }
}










  
export {calculateScore,
        calculateDealerScore,
        calculatePlayerScore,
        hit,
        hitDealer,
        playerScore,
        dealerScore
        };