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


