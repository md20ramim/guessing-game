// initializing some value
let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody =  document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guess");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const matchResult = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempt");

form.addEventListener("submit",function(){
    event.preventDefault();
    attempts++;
    if(attempts>5)
    {
        guessingNumber.disabled=true;
        checkButton.disabled=true;
        resultText.innerHTML="";
    }
    else
    {
        totalAttempts--;
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML=`Remaining attempts: ${totalAttempts}`;
    }
    guessingNumber.value="";
})

function checkResult(guessingNumber)
{
    const randomNumber = getRandomNumber(5);
    const guessing = parseInt(guessingNumber);
    if(randomNumber===guessing)
    {
        resultText.innerHTML=`You have won`;
        totalWon++;
    }
    else
    {
        resultText.innerHTML=`You have lost; random number was: ${randomNumber}`;
        totalLosts++;
    }
    matchResult.innerHTML=`Won: ${totalWon}, Lost: ${totalLosts}`;
    matchResult.classList.add("large-text");
    cardBody.appendChild(matchResult);
}

function getRandomNumber(limit)
{
    return Math.floor(Math.random()*limit)+1;
}