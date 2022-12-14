
let playerScore = 0 ;
let computerScore = 0;
let roundCounter = 0;





function getComputerChoice(){
    choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1) { return "Rock" }
    else if ( choice === 2) {  return "Paper" }
    else { return "Scissors" }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "Rock" && computerSelection === "Rock") { return undefined }
    else if (playerSelection ==="Rock" && computerSelection === "Paper" ) {return computerScore = computerScore +1 }
    else if (playerSelection ==="Rock" && computerSelection === "Scissors" ) {return playerScore = playerScore +1 }

    else if (playerSelection === "Paper" && computerSelection ==="Rock") {return playerScore = playerScore +1  }
    else if (playerSelection === "Paper" && computerSelection ==="Paper") { return undefined  }
    else if (playerSelection === "Paper" && computerSelection ==="Scissors") {return computerScore = computerScore +1  }

    else if (playerSelection === "Scissors" && computerSelection ==="Rock") {return computerScore = computerScore +1 }
    else if (playerSelection === "Scissors" && computerSelection ==="Paper") {return playerScore = playerScore +1}
    else if (playerSelection === "Scissors" && computerSelection ==="Scissors") { return undefined}
    
  }
   




  function gameAuto(playerSelection){
    computerScore = 0 ;
    playerScore = 0 ;
    for (let i = 0 ; i < 15; i++ ) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if ( playerScore === 5 ) { alert("Player wins !"); break }
        else if (computerScore === 5 ) {alert("Computer wins !"); break}
           
    }
    console.log("pc: ", computerScore)
    console.log("player: ", playerScore)
    console.log('Rounds played: ', roundCounter)
  }




function showResults(){
    
    alert("Rounds played: "+ roundCounter);
    computerScore = 0 ;
    playerScore = 0 ;
    roundCounter = 0 ;
    
}


function game(playerSelection){
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // console.log("pc: ", computerScore)
    // console.log("player: ", playerScore)
    roundCounter = roundCounter +1 ;

    if ( playerScore === 5 ) { 
        alert("Player wins !");
        showResults();  
}
    else if (computerScore === 5 ) {
        alert("Computer wins !");
        showResults();
    }

}