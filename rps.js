
function getRandomInt(min=1,max=3){
    return Math.floor(Math.random()*(max-min+1))+min;

}

function getComputerChoice(){
    let randomValue= getRandomInt();
    let choice;
    if(randomValue===1){
        choice="Rock";
        return choice;
    }
    else if(randomValue===2){
        choice="Paper";
        return choice;
    }
    else if(randomValue===3){
        choice="Scissors";
        return choice;
    }
}

function playRound(){
    //returns 1 if computer won, 2 if player won, and 3 if draw
    let playerChoice= (prompt("Please Enter Your Choice of Rock, Paper, Scissors: ")).toUpperCase();
    let computerChoice= getComputerChoice();
    //scenarios where computer wins
    if(computerChoice==="Rock"&&playerChoice==="SCISSORS"){
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        return "computer";
    }
    else if(computerChoice==="Paper"&&playerChoice==="ROCK"){
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        return "computer";
    }
    
    else if(computerChoice==="Scissors"&&playerChoice==="PAPER"){
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        return "computer";
    }
    //scenarios where player wins
    if(computerChoice==="Rock"&&playerChoice==="PAPER"){
       console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
       return "player";
    }
    else if(computerChoice==="Paper"&&playerChoice==="SCISSORS"){
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        return "player";
    }
    else if(computerChoice==="Scissors"&&playerChoice==="ROCK"){
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        return "player";
    }
    //scenarios where draw
    if(computerChoice==="Rock"&&playerChoice==="ROCK"){
        console.log(`Draw! Go Again.`);
        return "draw";
    }
    else if(computerChoice==="Paper"&&playerChoice==="PAPER"){
        console.log(`Draw! Go Again.`);
        return "draw";
    }
    else if(computerChoice==="Scissors"&&playerChoice==="SCISSORS"){
        console.log(`Draw! Go Again.`);
        return "draw";
    }
}

function game(){
let computerScore=0;
let playerScore=0;
    while(playerScore<3 && computerScore<3)
    {
        let result=playRound();
        if(result==="computer"){
            computerScore++;
        }
        else if(result==="player"){
            playerScore++;
        }
        console.log(`Player: ${playerScore}   Computer: ${computerScore}`);
    }
    if(playerScore===3){
        console.log("Congrats you Won! :)")
    }
    else if(computerScore===3){
        console.log("You Lost! You aren't very good at this game :(")
    }
}
