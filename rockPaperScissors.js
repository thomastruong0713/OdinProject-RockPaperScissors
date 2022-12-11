function getComputerChoice(){
    const compChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*compChoices.length);
    let computerChoice = compChoices[randomChoice];
    return computerChoice;
}