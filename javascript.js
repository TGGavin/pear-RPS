// remember to comment and pseudo-code everything 


//rps function name means Rock-Paper-Scissors. function randomly selects one of the three strings
function rps() {
    const rpsString = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * rpsString.length);

    const rockPaperScissors = rpsString[randomIndex];

    return console.log(rockPaperScissors);
}

function getHumanChoice(choice) {
    choice = prompt("Rock Paper Scissors")

    if (choice == "rock" 
        || choice == "paper" 
        || choice == "scissors" ) {
        console.log(choice);
    } else {
        console.log("Choose between: Rock, Paper, Scissors")
    }
    return;
};

getHumanChoice();

//const getComputerChoice = rps();
//console.log(getComputerChoice);