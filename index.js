function getComputerChoice(items){
    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){return "Draw!"}
    else if (playerSelection === "rock"){
        if (computerSelection == "paper"){return "You Lose! Paper beats Rock"}
        else {return "You Won! Rock beats Scissors"}
    }
    else if (playerSelection === "paper"){
        if (computerSelection == "rock"){return "You Won! Paper beats Rock"}
        else {return "You Lose! Scissors beats Paper"}
    }    
    else{
        if (computerSelection == "paper"){return "You won! Scissors beat Paper"}
        else {return "You Lose! Rock beats Scissors"}
    }

}

function play(){
    let computerSelection, playerSelection;
    for (let i=0; i<5; i++){
        computerSelection = getComputerChoice(items);
        playerSelection = prompt("Enter play: ");                
        console.log("Computer: " + computerSelection + " Player: " + playerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
}

let items = ['Rock', 'Paper', 'Scissors'];

play();