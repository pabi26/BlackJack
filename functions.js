import { playerScore, dealerScore, hit, hitDealer} from "./calculateScore.js"
import { splitHandWinner, isSplit } from "./splitCardFunctions.js"
import { dealerHand, playerHand } from "./deck.js"

let playerStand = false

let message = document.getElementById("message")
const dealCardsBtn = document.getElementById('deal-cards-btn') 
const dealerHitBtn = document.getElementById('dealer-hit-btn')
const hitBtn = document.getElementById('hit-btn')
const standBtn = document.getElementById('stand-btn')
const splitBtn = document.getElementById('split-btn')


function getPlayerCard(){
    if (playerScore < 21) {
        hit()
        if ( playerScore > 21){
            playerBusted()
        } 
    }     
}


function getDealerCard(){
    if(dealerScore < 17){
        hitDealer()
        if (dealerScore > 21){
            dealerBusted()
        } else if (dealerScore >= 17){
            dealerHitBtn.disabled = true
        }
    } 
    winner()
}

  



function playerBusted() {
    if(playerScore > 21){
        hitBtn.disabled = true;
        standBtn.disabled = true;
        splitBtn.disabled = true;
        dealerHitBtn.disabled = true;
        message.textContent = 'Player busts. Dealer wins!';
    }
}

function dealerBusted() {
    if (dealerScore > 21) {
        dealerHitBtn.disabled = true;
        message.textContent = 'Dealer busts. Player wins!';
    }
  
}



function stand(){
    if(standBtn.clicked = true){
        hitBtn.disabled = true
        standBtn.disabled = true
        splitBtn.disabled = true
        if(standBtn.clicked = true){
            playerStand = !playerStand
        }
    }
}




function winner(){
    if(isSplit === false) {
        if (playerStand = true & dealerHitBtn.disabled){
            determineWinner()
        } 
    } else if (isSplit === true){
        splitHandWinner()
    }
    
}





function determineWinner(){
    if(dealerScore <= 21){
        if(dealerScore > playerScore){
            message.textContent = "Dealer Wins"
        } else if (playerScore > dealerScore){
            message.textContent = "Player Wins"
        } else if( dealerScore === playerScore){
            message.textContent = "push"
        }
    }
}








export {getPlayerCard, getDealerCard, stand, winner, message};