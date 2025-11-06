function getComputerChoice() {
  const value = Math.floor(Math.random() * 3) + 1; 

  if (value === 1) {
    return "rock";
  } else if (value === 2) {
    return "paper";
  } else if (value === 3) {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
    console.log("It's a tie!");
} else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats rock.");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors.");
} else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats rock.");
} else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats paper.");
} else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissors.");
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper.");
};
if (humanScore === 5) {
  console.log("You are the winner!");
} else if (computerScore === 5) {
  console.log("The computer wins!");
};
};

const buttons = document.querySelectorAll("button");
const results = document.createElement("div");
results.style.background = "lightblue";
results.style.border = "2px solid black";
results.style.padding = "10px";
results.style.marginTop = "10px";
results.textContent = `Scores -> Human: ${humanScore}, Computer: ${computerScore}`;
document.body.appendChild(results);

buttons.forEach(button => {
  button.addEventListener("click", event => {
    const humanChoice = button.className;
    const computerChoice = getComputerChoice();
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    results.textContent = `Scores -> Human: ${humanScore}, Computer: ${computerScore}`;
  });
});