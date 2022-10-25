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
let computerScore = 0, playerScore = 0, round=1;

const buttons = document.querySelectorAll('.btn');
const playAgainButton = document.querySelectorAll('#again');
const msg = document.querySelector('#msg-container');
const wins = document.querySelector('#wins');
const loses = document.querySelector('#loses');
const score = document.querySelector('.score');
const roundCounter = document.querySelector('#round-counter');
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

document.addEventListener('click',function(e){
    if(e.target && e.target.id==='again'){
        computerScore = 0, playerScore = 0, round=1;
        wins.textContent = playerScore;
        loses.textContent = computerScore;
        roundCounter.textContent = round;
        msg.textContent = 'Make your choice and try to defeat the machine in 5 rounds';
        btnContainer.innerHTML = '<button class="btn" id="rock">Rock</button><button class= "btn" id="paper">Paper</button><button class= "btn" id="scissors">Scissors</button>'
    }
    else if (e.target && e.target.className==='btn'){
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice(items);
        msg.textContent = playRound(playerSelection, computerSelection);
        wins.textContent = playerScore;
        loses.textContent = computerScore;        
        round+=1;
        roundCounter.textContent = round;        
        if (round === 6){
            if (playerScore > computerScore){msg.textContent = 'You Won!';}
            else if (playerScore < computerScore){msg.textContent = 'You Lose'}
            else{msg.textContent = 'Draw'}
            btnContainer.innerHTML = '<button id="again">Play again</button>'
        }
    }
 });

