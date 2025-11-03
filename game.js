playGame();

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

function getHumanChoice() {
    var value = prompt("Let's play! Please enter 'rock', 'paper', or 'scissors'.").toLowerCase();

  if (value === "rock") {
    return "rock";
  } else if (value === "paper") {
    return "paper";
  } else if (value === "scissors") {
    return "scissors";
  }
}

function playGame() {
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
    }
    }
    for (let i = 0; i < 5; i++) {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    console.log("Round " + (i+1))
    console.log("Human chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    playRound(humanChoice, computerChoice); 
    console.log("Scores -> Human:", humanScore, "Computer:", computerScore); 
    }
}