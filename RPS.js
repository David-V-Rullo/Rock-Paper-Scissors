var Wins = 0;
var Losses = 0;
var Ties = 0;

var options = ['R', "P", "S"];


function userChoice() {
    

    return playerChoice.toUpperCase()
}
// write a funtion to start the game and ask for user choice

// If no user choice does not match R p S return and restart and let user know they need to enter R P S

//convert lower to upper

//Write a variable to get random index from the array option

//after randomization set computerChoice to whatever index you create up top
function makeComputerChoice() {
    
    
    
    return computerChoice;
}


var playGame = function() {

    //Getting player choice
    var playerChoice = prompt("Enter R, P, or S to play:")
    
    if (!playerChoice) {
        return;
    }
    playerChoice = playerChoice.toUpperCase()
    
    //Get computer choice
    var index = Math.floor(Math.random() * options.length);
    
    var computerChoice = options[index];
    window.alert("The computer chose " + computerChoice);

    //Game logic
    function tie(){ 
        window.alert("It's a tie");
        Ties++  ;
    }
    function  win() {
        window.alert("You win!")
        Wins++; 
        }
    function lose(){
        window.alert("You lose!")
        Losses++;
    }

    if (computerChoice === playerChoice) {
        return tie()
    }
    else if (
        (computerChoice === "R" && playerChoice === "P") || 
        (computerChoice === "S" && playerChoice === "R") || 
        (computerChoice === "P" && playerChoice === "S")) {
        return win()    
    }
    else {
        return lose()
    }
}

playGame()

// If user choice === computer choice ties++ elsie if user choice r p s and  choice s r p wins ++ else lossess++
//userChoice === "R" && computerChoice === "S" || 