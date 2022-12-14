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

function playRound(playerSelection, computerSelection) {
    console.log('PC:', computerSelection)
    console.log('PLAYER:', playerSelection)

    if (playerSelection === "Rock" && computerSelection === "Rock") { return "TIE!" }
    else if (playerSelection ==="Rock" && computerSelection === "Paper" ) { return "Computer Wins"  }
    else if (playerSelection ==="Rock" && computerSelection === "Scissors" ) {return "Player wins"  }

    else if (playerSelection === "Paper" && computerSelection ==="Rock") {return "Player wins"  }
    else if (playerSelection === "Paper" && computerSelection ==="Paper") {return "TIE!"  }
    else if (playerSelection === "Paper" && computerSelection ==="Scissors") {return "Computer Wins"  }

    else if (playerSelection === "Scissors" && computerSelection ==="Rock") {return "Computer Wins" }
    else if (playerSelection === "Scissors" && computerSelection ==="Paper") {return "Player wins"}
    else if (playerSelection === "Scissors" && computerSelection ==="Scissors") {return "TIE!"}
    
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

