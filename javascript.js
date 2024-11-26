// remember to comment and pseudo-code everything 

//include function expressions somewhere I guess

//rps function name means Rock-Paper-Scissors. function randomly selects a string
function rps() {
    const rpsString = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * rpsString.length);

    const rockPaperScissors = rpsString[randomIndex];
    
    console.log(rockPaperScissors);
    
    return; 
};
//function purpose is to assign the computer a choice using the above function
    function getComputerChoice() {
    
        let choice = rps();
        //something is fucky over here
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

    function shoot() {

        getHumanChoice();

        getComputerChoice();

        if (getHumanChoice() > getComputerChoice() ) {
            console.log("A human has won")
        }

        return;
    };

//make a function that determines what answer beats what

//make another function store whether the pc or person won, involving an increment operator "++"