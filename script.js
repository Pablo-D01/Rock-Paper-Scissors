
let playerScore = 0 ;
let computerScore = 0;
let roundCounter = 0;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!";

const results = document.querySelector("#results");
function upDateResults(){
    results.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}


function tie() {output.textContent = `Its a tie! ` };
function playerWin() {output.textContent = `You won this round ` };
function computerWin() {output.textContent = `You lost this round ` };


function getComputerChoice(){
    choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1) { return "Rock" }
    else if ( choice === 2) {  return "Paper" }
    else { return "Scissors" }
}

// function playRound(playerSelection, computerSelection) {
    
//     if (playerSelection === "Rock" && computerSelection === "Rock") {tie(); return undefined ; }
//     else if (playerSelection ==="Rock" && computerSelection === "Paper" ) {computerWin(); return computerScore = computerScore +1 }
//     else if (playerSelection ==="Rock" && computerSelection === "Scissors" ) { playerWin(); return playerScore = playerScore +1 }

//     else if (playerSelection === "Paper" && computerSelection ==="Rock") { playerWin(); return playerScore = playerScore +1  }
//     else if (playerSelection === "Paper" && computerSelection ==="Paper") { tie(); return undefined  }
//     else if (playerSelection === "Paper" && computerSelection ==="Scissors") {computerWin(); return computerScore = computerScore +1  }

//     else if (playerSelection === "Scissors" && computerSelection ==="Rock") {return computerScore = computerScore +1 }
//     else if (playerSelection === "Scissors" && computerSelection ==="Paper") { playerWin(); return playerScore = playerScore +1}
//     else if (playerSelection === "Scissors" && computerSelection ==="Scissors") { tie(); return undefined}
    
// }

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock" && computerSelection === "Rock" 
        || playerSelection === "Paper" && computerSelection ==="Paper" 
        || playerSelection === "Scissors" && computerSelection ==="Scissors" ) {tie(); return undefined ; }
    
    else if (playerSelection ==="Rock" && computerSelection === "Paper" 
        || playerSelection === "Paper" && computerSelection ==="Scissors" 
        || playerSelection === "Scissors" && computerSelection ==="Rock") {computerWin(); return computerScore = computerScore +1 }
    
    else if (playerSelection ==="Rock" && computerSelection === "Scissors" 
        || playerSelection === "Paper" && computerSelection ==="Rock" 
        || playerSelection === "Scissors" && computerSelection ==="Paper" ) { playerWin(); return playerScore = playerScore +1 }
}



function showResults(){
    
    alert("Rounds played: "+ roundCounter);
    computerScore = 0 ;
    playerScore = 0 ;
    roundCounter = 0 ;  
    output.textContent = "May the Best Person Win!";
    upDateResults();
}



function game(playerSelection){
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    roundCounter = roundCounter +1 ;
    upDateResults(); 

    if ( playerScore === 5 ) { 
        alert("Player wins !");
        showResults();  
}
    else if (computerScore === 5 ) {
        alert("Computer wins !");
        showResults();
    }

}