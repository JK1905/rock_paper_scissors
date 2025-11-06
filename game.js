let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const scoreboard = document.getElementById('scoreboard');
const notification = document.getElementById('notification');

choices.forEach(img => {
  img.addEventListener('click', () => {
    const humanChoice = img.classList[1]; // rock/paper/scissors
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScoreDisplay();
    checkWinner();
  });
});

function getComputerChoice() {
  const value = Math.floor(Math.random() * 3) + 1;
  return value === 1 ? 'rock' : value === 2 ? 'paper' : 'scissors';
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    notification.textContent = "It's a tie!";
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    notification.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    notification.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateScoreDisplay() {
  scoreboard.textContent = `Scores => Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winnerNotification = document.getElementById('winner-notification');
    const winner = humanScore === 5 ? "Human" : "Computer";

    // Show winner notification
    winnerNotification.textContent = `${winner} wins the game!`;
    winnerNotification.style.opacity = '1';           // make it visible
    winnerNotification.classList.add('winner-animate');

    // Reset scores AFTER showing notification
    setTimeout(() => {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();

      // Hide winner notification
    winnerNotification.classList.remove('winner-animate');
    winnerNotification.style.opacity = '0';
    winnerNotification.textContent = '';
    }, 2000); // keeps it visible for 2 seconds
  }
}