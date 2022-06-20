const choices = ['rock','paper','scissors']
function game(){
  playRound();
}
function playRound(){
  const playerSelection = playerChoice()
  const computerSelection = computerChoice()
  const winner = checkWinner(playerSelection,computerSelection);
  console.log(winner);
}


function playerChoice(){
  let input = prompt("Type: rock, paper, or scissors")
  while(input== null){
    input= prompt("Type: rock, paper, or scissors")
  }
  input = input.toLowerCase()
  let check= validateInput(input);
  while(check==false){
    prompt('Error: Type: rock, paper, or scissors')
    input = input.toLowerCase();
    check = validateInput(input);
  }

}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC){
    return "tie game";
  }
  else if(
    (choiceP === "rock" && choiceC ==="scissors")|| 
  (choiceP === "paper" && choiceC === "rock") ||
  (choiceP ==="scissors" && choiceC==="paper")
  ){
    return "Player win";
  }
  else{
    return "Computer wins";
  }
}
game();