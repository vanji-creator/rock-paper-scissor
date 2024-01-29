const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let resultChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateRandomNumber();
    computerChoiceDisplay.innerHTML = computerChoice;
    resultChecker();
    resultDisplay.innerHTML = resultChoice;
}));

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissor';
    }
}

function resultChecker() {
    if (computerChoice === userChoice) {
        resultChoice = 'draw';
    } else if (
        (computerChoice === 'rock' && userChoice === 'scissor') ||
        (computerChoice === 'paper' && userChoice === 'rock') ||
        (computerChoice === 'scissor' && userChoice === 'paper')
    ) {
        resultChoice = 'computer won';
    } else {
        resultChoice = 'user won';
    }
}
