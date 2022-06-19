const choices = ['rock','paper','scissors']
function game(){
  ///play the game
  //play5 rounds
  //console based
}
function playerRound(){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerchoice(){
  let input = prompt("Type: rock, paper, or scissors")
  input = input.toLowerCase()
}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}