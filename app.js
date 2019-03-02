const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.getElementsByClassName(".score-board");
const result_div = document.getElementsByClassName(".result");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors')


main();

function game(userChoice){
   console.log(userChoice);
}

function main() {
  rock_div.addEventListener('click', function(){
     game('rock');
  })

  paper_div.addEventListener('click', function(){
     game('paper');
  })

  scissors_div.addEventListener('click', function(){
     game('scissors');
  })
}
