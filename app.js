const smallUser = 'user'.fontsize(3).sub();
const smallComp = 'comp'.fontsize(3).sub();
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.getElementById("score-div");
const result_div_p = document.getElementById("result-div-p");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors')

function getCompChoice(){
   const choice = ['rock', 'paper', 'scissors']
   const random_choice = Math.floor(Math.random() * 3);
   return choice[random_choice];
}


function firstLetterUpercase(letter){
   return letter.charAt(0).toUpperCase() + letter.slice(1);
}

function win(userChoice, compChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   result_div_p.innerHTML = firstLetterUpercase(userChoice) + smallUser + " beats " + firstLetterUpercase(compChoice) + smallComp + ".You win!"   
   console.log(userScore);
   console.log("User win");
}

function loose(userChoice, compChoice) {
   computerScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   result_div_p.innerHTML = firstLetterUpercase(compChoice) + smallComp + " beats " + firstLetterUpercase(userChoice) + smallUser + ".You lose!"   
   console.log("User lose");
}

function draw(userChoice, compChoice){
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = computerScore;
   result_div_p.innerHTML = firstLetterUpercase(compChoice) + smallComp + " equals " + firstLetterUpercase(userChoice) + smallUser + ".Draw!"
 
  console.log("It is a draw");
}

function game(userChoice){
   const compChoice = getCompChoice();
   switch( userChoice  + compChoice){
     case "rockscissors":
     case "paperrock":
     case "scissorspaper":
       
       win(userChoice, compChoice);
       break;
     case "rockpaper":
     case "paperscissors":
     case "scissorsirock":
       loose(userChoice, compChoice)
       break;
     case "paperpaper":
     case "rockrock":
     case "scissorsscissors":
       draw(userChoice, compChoice);
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
