function getComputerChoice(){ // Create function to let computer get a random choice
    const compChoices = ["Rock", "Paper", "Scissors"]; //  create array for computer to choose from
    let randomChoice = Math.floor(Math.random()*compChoices.length); // create random choice
    let computerChoice = compChoices[randomChoice]; // apply random choice to our existing array
    return computerChoice; //  return our answer which will be used later
}

function playRound(playerSelection, computerSelection){ // Create function to play a single round
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){ // Create if else if statements to decide outcomes 
        return "Draw! Rock ties with Rock";
    }
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper'){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors'){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock'){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper'){
        return "Draw! Paper ties with Paper";
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock'){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper'){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors'){
        return "Draw! Scissors ties with Scissors";
    }
    else{
        return "Incorrect selection";
    }
}

var computerWins = 0; // Set variables to keep score of the game
var playerWins = 0;

function game(){ // Create function for full game of 5 rounds
    for(let i = 0; i < 5; i++){ // Create for loop that loops 5 times
        let playerSelection = prompt("Please choose Rock, Paper, or Scissors"); // Get player input and store into variable playerSelection
        let computerSelection = getComputerChoice(); // Get computer input and store it into computerSelection
        let result = playRound(playerSelection, computerSelection); // Store result of 1 round into variable to use in if elseif block
        if(result == "You Win! Paper beats Rock" || result == "You Win! Rock beats Scissors" || result == "You Win! Scissors beats Paper"){ // if elseif block to see if there was a win, loss, or draw and tally the points accordingly
            playerWins = playerWins + 1
            console.log(result);
            console.log("Current score: " + playerWins + "-" + computerWins);
        }
        else if(result == "You Lose! Scissors beats Paper" || result == "You Lose! Rock beats Scissors" || result == "You Lose! Paper beats Rock"){
            computerWins = computerWins + 1
            console.log(result);
            console.log("Current score: " + playerWins + "-" + computerWins);
        }
        else if(result == "Draw! Paper ties with Paper" || result == "Draw! Scissors ties with Scissors" || result == "Draw! Rock ties with Rock"){
            console.log(result);
            console.log("Current score: " + playerWins + "-" + computerWins);
        }
        else{
            console.log(result);
        }
    }
}

game();

console.log("The final score of your game is: " + playerWins + "-" + computerWins) // Message to user for final score and who won

if(playerWins > computerWins){
    console.log("You Win!");
}
else{
    console.log("The computer has beaten you!");
}