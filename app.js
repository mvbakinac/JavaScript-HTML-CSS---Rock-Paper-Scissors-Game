const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.getElementById("score-div");
const result_div = document.getElementsByClassName("result_div");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors')

function getCompChoice(){
   const choice = ['rock', 'paper', 'scissors']
   const random_choice = Math.floor(Math.random() * 3);
   return choice[random_choice];
}


function win() {
   console.log("User win");
}

function loose() {
   console.log("User lose");
}

function draw(){
  console.log("It is a draw");
}

function game(userChoice){
   const compChoice = getCompChoice();
   switch( userChoice  + compChoice){
     case "rockscissors":
     case "paperrock":
     case "scissorspaper":
       
       win();
       break;
     case "rockpaper":
     case "paperscissors":
     case "scissorsirock":
       loose()
       break;
     case "paperpaper":
     case "rockrock":
     case "scissorsscissors":
       draw();
       break;
 }
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

main();
getCompChoice();
