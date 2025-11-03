# rock_paper_scissors

This project is a simple Rock Paper Scissors game built as part of The Odin Project. The main focus was to practice JavaScript fundamentals, including functions, loops, user input, and basic game logic.

The game contains:

- A console-based interface where the player can input their choice.
- A computer opponent that randomly selects rock, paper, or scissors each round.
- Score tracking for both the player and the computer over 5 rounds.

## What I learned

- Using JavaScript functions to organize code (`getHumanChoice`, `getComputerChoice`, `playRound`, `playGame`)
- Handling user input with `prompt()` and normalizing it with `.toLowerCase()`
- Generating random values with `Math.random()` and `Math.floor()`
- Using loops to play multiple rounds
- Incrementing and tracking scores
- Conditional logic with `if`/`else if` statements
- Logging output to the console for interaction
- Structuring a small project and documenting it with a README

## How to play

1. Clone the repository.
2. Open `index.html` in your browser.
3. Open the browser console (usually F12 or right-click → Inspect → Console).
4. The game will prompt you to enter “rock”, “paper”, or “scissors”.
5. Play 5 rounds against the computer and see who wins.

## Notes

- The game is entirely console-based; no additional UI is implemented.
- All input is case-insensitive.
- Scores are tracked internally and displayed inside the console after each round.
