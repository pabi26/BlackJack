import { resetSplithands } from "./splitCardFunctions.js";
const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
let deck = []
let shuffledDeck = []
let playerCards = [];
let dealerCards = [];
let dealerHand = document.getElementById("dealer-hand");
let playerHand = document.getElementById("player-hand");



// Get Deck of Cards
for (let suit in suits) {
  for (let value in values) {
      deck.push(values[value] + ' of ' + suits[suit]);
    }
}


// Shuffle Deck
const shuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
      let randomIndex = Math.floor(Math.random() * deck.length);
      [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
  return deck;
};
shuffledDeck = shuffle(deck);
let newDeck = shuffledDeck.slice(4);




// function to Deal Cards
function dealCards(){
    playerCards = [shuffledDeck[0], shuffledDeck[2]];
    dealerCards = [shuffledDeck[1], shuffledDeck[3]];
    playerHand.textContent = ( playerCards[0] + ' and ' + playerCards[1]);
    dealerHand.textContent = ( dealerCards[0]);
    return {playerCards, dealerCards}
    
}

function showDealerHands(){
    dealerHand.textContent = ( dealerCards[0] + ' and ' + dealerCards[1]);
}


function reset(){
    resetMainHands()
    resetSplithands()
    resetDisplay()
    document.getElementById('player-hand-1').style.display = 'flex';
}


function resetMainHands() {
    playerCards = [];
    dealerCards = [];
    shuffledDeck = shuffle(deck);
}

function resetDisplay() {
    playerHand.textContent = '';
    dealerHand.textContent = '';
    document.getElementById("message").textContent = ''
    document.getElementById('deal-cards-btn').style.display = 'block';
    document.getElementById("player-sum").textContent = '';
    document.getElementById("dealer-sum").textContent = '';
    document.getElementById('hit-btn').disabled = true
    document.getElementById('stand-btn').disabled = true
    document.getElementById('split-btn').disabled = true
}




export {dealCards,
        showDealerHands,
        playerCards,
        dealerCards,
        dealerHand,
        playerHand,
        shuffledDeck,
        newDeck,
        reset
        };