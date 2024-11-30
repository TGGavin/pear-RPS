// remember to comment and pseudo-code everything 

//include function expressions somewhere I guess

//globalize the values of getHumanChoice and getComputerChoice to they can be accessed by other functions


//rps function name means Rock-Paper-Scissors. function randomly selects a string, to be used as the computers choice
    function getComputerChoice() {

    const rpsString = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * rpsString.length);

    const pcChoice = rpsString[randomIndex];
    
    console.log(pcChoice);
    
    return; 
};

//function purpose is to have the human determine the variable
    function getHumanChoice(outCome) {

    choice = prompt('Choose between: "rock", "paper", "scissors". P.S. Lower case answers only')

    if (choice == "rock" 
        || choice == "paper" 
        || choice == "scissors" ) {
            
            outCome = choice;

            console.log(outCome);

    } else {
        return console.log("No option was selected ");
    }

    return;
};

//make a function that determines what answer beats what

//make another function store whether the pc or person won, involving an increment operator "++"

