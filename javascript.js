// remember to comment and pseudo-code everything 


//rps function name means Rock-Paper-Scissors. function randomly selects a string
function rps() {
    const rpsString = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * rpsString.length);

    const rockPaperScissors = rpsString[randomIndex];

    return console.log(rockPaperScissors);
}
//function purpose is to assign the computer a choice using the above function
    function getComputerChoice() {
    
        let choice = rps();
    
        return console.log(choice);
    }

//function purpose is to have the human determine the variable
function getHumanChoice(choice) {

    choice = prompt('Choose between: "rock" "paper" "scissors" P.S. Lower case answers only')

    if (choice == "rock" 
        || choice == "paper" 
        || choice == "scissors" ) {
        console.log(choice);
    } else {
        console.log("Choose between: Rock, Paper, Scissors. Use only lowercase as an answer")
    }
    return;
};
