let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let game=["rock","paper","scissor"];
    return(game[Math.floor(Math.random()*3)]);
}

function playerPlay(){
    return (prompt().toLowerCase());
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return(2);
    }else if(playerSelection === "rock"&&computerSelection==="scissor"||playerSelection === "paper"&&computerSelection==="scissor"||playerSelection === "scissor"&&computerSelection==="paper"){
        return(1);
    }else if(playerSelection === "rock"&&computerSelection==="paper"||playerSelection === "paper"&&computerSelection==="rock"||playerSelection === "scissor"&&computerSelection==="rock"){
        return(0);
    }else{
        console.log(playerSelection+" is Wrong entry!!!");
        return(3);
    }
}

function gameRoundHelper(){
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection.toLowerCase(),computerSelection);
    if(result===1){
        playerScore++;
        console.log("Won the round!!!"+playerSelection+" beats "+computerSelection);
    }else if(result===0){
        computerScore++;
        console.log("Lost the round!!!"+computerSelection+" beats "+playerSelection);
    }else if(result===3){
        gameRoundHelper();
    }else{
        console.log("Draw!!! Both selection is "+computerSelection);
    }
}

function game(){
    for(let round=1;round<=5;round++){
        gameRoundHelper();
    }
    if(playerScore>computerScore){
        console.log("Congratulation you won!! your score:"+playerScore+" computer score:"+computerScore )
    }else if(computerScore>playerScore){
        console.log("You Lost!! your score:"+playerScore+" computer score:"+computerScore )
    }else{
        console.log("Draw!! your score:"+playerScore+" computer score:"+computerScore )
    }
    computerScore = 0;
    playerScore = 0;

}

game();

