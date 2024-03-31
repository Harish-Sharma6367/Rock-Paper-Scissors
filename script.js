let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector(".msg");

let userDisplay = document.querySelector("#user-score");

let compDisplay = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userDisplay.innerText = `${++userScore}`;
    }else{
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compDisplay.innerText = `${++compScore}`;
    }
}

const drowGame = () =>{
    msg.innerText = "Game was Drow. Play again.";
    msg.style.backgroundColor = "rgb(44, 34, 34)";
}

const genCompChoice = () =>{
    let options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
} 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //drow game
        drowGame()
        return;
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            //scissor paper
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            //scissor rock
            userWin = compChoice === "Rock" ? true : false;
        }else {
            //rock paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});