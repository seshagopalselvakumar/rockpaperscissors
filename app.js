let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const action_p = document.getElementById("action-message")
function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function convert(name) {
  if (name === 'r') {
  return "rock";
  }
  else if (name === 'p') {
    return "paper";
  }
  else {
    return "scissors";
  }

}
function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallCaseUser = "user".fontsize(3).sub();
    const smallCaseComp = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(userChoice) + smallCaseUser + " beats " + convert(computerChoice) + smallCaseComp + ". You win the point!" ;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}
function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallCaseUser = "user".fontsize(3).sub();
    const smallCaseComp = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(computerChoice) + smallCaseComp + " beats " + convert(userChoice) + smallCaseUser + ". Computer gets the point!" ;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow')}, 500);

}
function draw(userChoice, computerChoice)
{

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Its a draw!" ;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
  }

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice)
  {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;
    }

}
function main() {
    rock_div.addEventListener('click', function() {
    game("r");

  })
  paper_div.addEventListener('click', function() {
    game("p");

  })
  scissors_div.addEventListener('click', function() {
    game("s");

})
}

main();
