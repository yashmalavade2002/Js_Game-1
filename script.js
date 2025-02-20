let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText="Game Was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText= `You lose!  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
        return;
    } 

    let userWin = false; // Default to false

    if (userChoice === "rock") {
        userWin = compChoice === "scissors"; // Rock beats Scissors
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock"; // Paper beats Rock
    } else if (userChoice === "scissors") {
        userWin = compChoice === "paper"; // Scissors beats Paper
    }

    showWinner(userWin,userChoice,compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
