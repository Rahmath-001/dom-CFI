let cards = [];
let sum = 0;

let messageEl= document.querySelector("#message-el")
let sumEl= document.querySelector("#sum-el")
let cardsEl= document.querySelector("#cards-el")

let isAlive = true;

let hasBlackJack = false;



function randomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    console.log(randomNumber); 
    if (randomNumber> 10) {
        return 10;
    }
    else{
        return randomNumber;
    }

}



function startGame(){
    cards= []
    sum = 0;
    isAlive= true;
    hasBlackJack= false;
    let card1 = randomCard();
    let card2 = randomCard();

    cards= [ card1, card2]
    sum = card1 + card2;
    
    renderGame()
}


function renderGame() {
    cardsEl.innerHTML= "Cards : "
 for (let i=0; i< cards.length; i++){
    cardsEl.innerHTML += cards[i] + ' '
 }

 sumEl.innerHTML= "Sum: " + sum;
 if (sum<=20){
    messageEl.innerHTML = "Do you want to draw a new card? "
 }
 else if(sum == 21){
    messageEl.innerHTML = "You Win!";
    hasBlackJack=true;
 }
 else{
    messageEl.innerHTML = "You Lose!";
    isAlive= false;
 }

}


function newCard() {
    if (isAlive == true && hasBlackJack == false){
        let card= randomCard()
        sum +=card;
        cards.push(card);
        renderGame();
    }
}