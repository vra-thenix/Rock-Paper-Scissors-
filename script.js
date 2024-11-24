let userScore = 0
let computerScore = 0;

const options = document.querySelectorAll('.option');
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');

options.forEach(option => {
    option.addEventListener('click', () => {
        const userChoice = option.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        displayResult(result, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        userScore++;
        return 'win';
    } else {
        computerScore++;
        return 'lose';
    }
}

function displayResult(result, computerChoice) {
    let message = `Computer chose ${computerChoice}. `;
    
    if (result === 'win') {
        message += 'You win!';
    } else if (result === 'lose') {
        message += 'You lose!';
    } else {
        message += 'It\'s a draw!';
    }

    resultDiv.innerText = message;
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;
}
