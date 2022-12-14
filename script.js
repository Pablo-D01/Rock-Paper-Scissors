// 1 - Rock
// 2 - Paper
// 3 - Scissors
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1) {
        return "Rock"
    }
    else if ( choice === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}


let playerScore = 0 ;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    // console.log('PC:', computerSelection)
    // console.log('PLAYER:', playerSelection)

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
   
  
//   const playerSelection = "Rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));

  function game(playerSelection){
    computerScore = 0 ;
    playerScore = 0 ;
    for (let i = 0 ; i < 15; i++ ){
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if ( playerScore === 5 ) { alert("Player wins !"); break }
        else if (computerScore === 5 ) {alert("Computer wins !"); break}
        x = i
        
    

    }
    console.log("pc: ", computerScore)
    console.log("player: ", playerScore)
    console.log('Rounds played: ', x)
  }

