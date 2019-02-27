let userScoe =0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-boad");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let sissor_div = document.getElementById("s");



function getCommputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWOrd (letter){
    if(letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if(letter = "S") return "Scissors";

}

function win(userChoice ,computerChoice){
    userScoe++;
    userScore_span.innerHTML = userScoe;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =`${convertToWOrd( userChoice)}${smallUserWord} beats ${convertToWOrd(computerChoice)}${smallCompWord}. You win!!"`;
  userChoice_div.classList.add('.green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 500);
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScoe;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =`${convertToWOrd( userChoice)}${smallUserWord} loses to ${convertToWOrd(computerChoice)}${smallCompWord}. You lost!!"`;
    userChoice_div.classList.add('.red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 500);
}
function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML =`${convertToWOrd( userChoice)}${smallUserWord} same ${convertToWOrd(computerChoice)}${smallCompWord}. its draw!!"`;
    userChoice_div.classList.add('.blue-glow');
    setTimeout(function(){userChoice_div.classList.remove('blue-glow')}, 500);
}
    

 

function game(userChoice){
    const computerChoice = getCommputerChoice();
   switch(userChoice + computerChoice){
       case"rs":
       case"pr":
       case"sp":
       win(userChoice,computerChoice);
       break;
       case"rp":
       case"ps":
       case"sr":
       lose(userChoice,computerChoice);
       break;
       case"rr":
       case"pp":
       case"ss":
       draw(userChoice,computerChoice);
       break;
   }
   
}

function main (){

rock_div.addEventListener('click',function(){
    game("r");
})

paper_div.addEventListener('click',function(){
    game("p");
})
sissor_div.addEventListener('click',function(){
    game("s");
})
}

main();

