function rps() {
    const rpsString = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * rpsString.length);

    const rockPaperScissors = rpsString[randomIndex];

    return console.log(rockPaperScissors);
}
