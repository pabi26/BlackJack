const BlackJackRules = [
    "Blackjack hands are scored by their total points. The hand with the highest total wins as long as it doesn't exceed 21; a hand with a higher total than 21 is said to bust.",
    "Cards 2-10 are of value two to ten. Jack, queen and king are of value ten, and an ace's value is 11 unless this would cause the player to bust, in which case it is worth 1.",
    "The goal is to beat the dealer by having the higher, unbusted hand. If the player busts he loses, even if the dealer also busts (therefore Blackjack favors the dealer). If both the player and the dealer have the same point value, it is called a 'push', and neither player nor dealer wins the hand.",
    "A two-card hand of 21 (an ace plus a ten-value card) is called a 'blackjack' or a 'natural', and is an automatic winner.",
    "Dealer must hit unless total score equals to 17 or more.",
    "Player can only split cards if they are of the same value."
];

let rules = document.getElementById('rules');


function getRulesHtml() {
    const rulesElement = document.getElementById('rules');
    if (!rulesElement) return; // if element not found, exit function
    let ruleHtml = `<h2 id="rule-title" class="underline">Rules Of The Game</h2>`;
    
    for (let i = 0; i < BlackJackRules.length; i++) {
        const rule = BlackJackRules[i];
        ruleHtml += 
        `   
            <ul>
                <li class = "rule">${rule}</li>
            </ul>
        `;
    } 
    if(ruleHtml !== ``) {
        rulesElement.innerHTML = ruleHtml += `<button id="close-rules">X</button>`; 
    }
}

getRulesHtml()





export { getRulesHtml };
