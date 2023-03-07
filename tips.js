const BlackJackTips = [
    { 
        title: "HOW TO PLAY A HARD HAND",
        subTitle: "In a hard hand, you have two cards, without an ace:",
        tips: 
        [ 
            "With 8 or less, always hit.",
            "With 9, double if the dealer has 3 through 6, if not, hit.",
            "With 10, double if the dealer has 2 through 9, if not, hit.",
            "With 11, double if the dealer has 2 through 10, hit if the dealer has an ace.",
            "With 12, hit if the dealer has 2 or 3, stand if the dealer has 4 through 6, if not, hit.",
            "With 13-16, stand if the dealer has 2 through 6, if not, hit.",
            "With 17-21, always stand."
        ],
    },
    
    {
        title: "HOW TO PLAY A SOFT HAND",
        subTitle: "In a soft hand, you have two cards, including an ace:",
        tips: 
        [ 
            "With ace-2 or ace 3, double if the dealer has 5 or 6, if not, hit.",
            "With ace-4 or ace-5, double if the dealer has 4 through 6, if not, hit.",
            "With ace-6, double if the dealer has 3 through6, if not, hit.",
            "With ace-7, stand if the dealer has 2, 7 or 8. Double if the dealer has 3 through 6, if not, hit.",
            "With ace-8 or ace-9, always stand."
        ],

    },
        
    {
        title: "HOW TO PLAY PAIRS",
        subTitle: "Pairs are simply two cards of the same points value:",
        tips: 
        [ 
            "With a pair of aces or 8s, always split.",
            "With a pair of 2s or 3s, split if the dealer has 2 through 7, if not, hit.",
            "With a pair of 4s, split if the dealer has 5 or 6, if not, hit.",
            "With a pair of 5s, double if the dealer has 2 through 9, if not, hit.",
            "With a pair of 6s, split if the dealer has 2 through 6, if not, hit.",
            "With a pair of 7s, split if the dealer has 2 through 7, if not, hit.",
            "With a pair of 9s, split if the dealer has 2 through 6, and 8 or 9. Stand if the dealer has 7, 10 or ace.",
            "With a pair of 10s, always stand."    
        ]
    }
];
       
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
let tipSlide = document.querySelector(".tip-slide");
let currentTipIndex = 0;


function getTipHtml() {
    let currentTip = BlackJackTips[currentTipIndex];
    let tipHtml = "";
    let title = currentTip.title;
    let subTitle = currentTip.subTitle;
    tipHtml += `
            <div id = "title">
                <h3 class="underline" class="title">${title}</h3>
            </div>
            <h4 id = "subtitle" class="subTitle">${subTitle}</h4>
            `

    // Loop through each tip and generate HTML
    for (let i = 0; i < currentTip.tips.length; i++) {
        let tip = currentTip.tips[i];
        
        // Append the HTML for the current tip to the tipHtml variable
        tipHtml += 
        `
            <ul>
                <li id = "tips"> 
                    ${tip}
                </li>
            </ul>
        `;
    } 
    // Set the HTML content of the tip slide container
    tipSlide.innerHTML = tipHtml;
   
}

// Call the function to generate HTML for the current tip
getTipHtml();



function next() {
    if (currentTipIndex < 2){
        currentTipIndex++
    } else {
        currentTipIndex = 0
    }
}

function prev() {
    if(currentTipIndex > 0) {
        currentTipIndex--
    } else {
        currentTipIndex = 2
    }
}


nextBtn.addEventListener('click', function() {
    console.log('clicked')
    next()
    getTipHtml()
    console.log(currentTipIndex)
})

prevBtn.addEventListener('click', function() {
    console.log('clicked')
    prev()
    getTipHtml()
    console.log(currentTipIndex)

})




export { getTipHtml };

