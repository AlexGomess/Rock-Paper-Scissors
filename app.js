let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCPUChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, cpu) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = user.charAt(0).toUpperCase() + user.slice(1) + " beats " + cpu.charAt(0).toUpperCase() + cpu.slice(1) + ". You win :D";

}

function lose(user, cpu) {
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = cpu.charAt(0).toUpperCase() + cpu.slice(1) + " beats " + user.charAt(0).toUpperCase() + user.slice(1) + ". You lost ):";
}

function draw(user, cpu) {
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = user.charAt(0).toUpperCase() + user.slice(1) + " equals " + cpu.charAt(0).toUpperCase() + cpu.slice(1) + ". It's a draw!";
}


function game(userChoice){
    const cpuChoice = getCPUChoice();
    switch (userChoice + cpuChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, cpuChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, cpuChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, cpuChoice);
            break;

    }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  })

  paper_div.addEventListener("click", function () {
    game("paper");
  })

  scissors_div.addEventListener("click", function () {
    game("scissors");
  })
}

main();