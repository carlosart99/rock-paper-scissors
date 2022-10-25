function getComputerChoice(items){
    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){return "Draw!"}
    else if (playerSelection === "rock"){
        if (computerSelection == "paper"){computerScore++; return "You Lose! Paper beats Rock"}
        else {playerScore++; return "You Won! Rock beats Scissors"}
    }
    else if (playerSelection === "paper"){
        if (computerSelection == "rock"){playerScore++; return "You Won! Paper beats Rock"}
        else {computerScore++; return "You Lose! Scissors beats Paper"}
    }    
    else{
        if (computerSelection == "paper"){playerScore++; return "You won! Scissors beat Paper"}
        else {computerScore++; return "You Lose! Rock beats Scissors"}
    }

}

function play(playerSelection){
    let computerSelection;
    computerSelection = getComputerChoice(items);    
    return playRound(playerSelection, computerSelection);
}

let items = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0, playerScore = 0, round=0;

const buttons = document.querySelectorAll('button');
const msg = document.querySelector('#msg-container');
const wins = document.querySelector('#wins');
const loses = document.querySelector('#loses');
const score = document.querySelector('.score')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice(items);
        wins.textContent = playerScore;
        loses.textContent = computerScore;    
        msg.textContent = playRound(playerSelection, computerSelection);
        round++;
        console.log(round)
        if (round === 5){            
            score.innerHTML = '<p>You won!</p>';
        }
    });
})