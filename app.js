let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("The game was draw..")
    msg.innerText = "Game was draw, Play again!"
    msg.style.backgroundColor = "purple"
}

const showWinner = (userWin, userchoice, compchoice) => {

    if (userWin) {
        userScore++
        userscorepara.innerText = userScore;
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
        console.log("You Win!");
    }
    else {
        compScore++
        compscorepara.innerText = compScore
        msg.innerText = `You lost! ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red"
        console.log("You Lose!");
    }
}
// for calculating both the score 
const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);

    const compchoice = genCompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {

        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "rock" ? true : false;

        } else if (userchoice === "scissors") {
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin, userchoice, compchoice);
    }
}
// for generating the computer choice 
const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
