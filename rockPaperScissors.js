function getComputerChoice(){
    const compChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random()*compChoices.length);
    let computerChoice = compChoices[randomChoice];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){
        return "Draw! Rock ties with Rock"
    }
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper'){
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors'){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock'){
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Paper'){
        return "Draw! Paper ties with Paper"
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock'){
        return "You Lose! Rock beats Scissors"
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper'){
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Scissors'){
        return "Draw! Scissors ties with Scissors"
    }
    else{
        return "Incorrect selection"
    }
}
