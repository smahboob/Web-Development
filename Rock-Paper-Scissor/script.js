

function computerPlay(){
    let choices = ['Rock','Paper','Scissor'];
    let random = Math.floor(Math.random() * 3); 
    let selected = choices[random];
    return selected;
}

let playerCount = 0;
let computerCount = 0

function playGame(playerSelection, computerSelection){

    let winner = "";

    if(playerSelection === computerSelection){
        winner = "No one Won!"
    }

    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            winner = `You lose, ${computerSelection} beats ${playerSelection}`;
            computerCount++;
        }
        else if (computerSelection === 'scissor'){
            winner = `You Win, ${playerSelection} beats ${computerSelection}`;
            playerCount++;
        }
    }

    else if (playerSelection === 'paper'){
        if (computerSelection === 'scissor'){
            winner = `You lose, ${computerSelection} beats ${playerSelection}`;
            computerCount++;

        }
        else if (computerSelection === 'rock'){
            winner = `You Win, ${playerSelection} beats ${computerSelection}`;
            playerCount++;
        }
    }

    else if (playerSelection === 'scissor'){
        if (computerSelection === 'rock'){
            winner = `You lose, ${computerSelection} beats ${playerSelection}`;
            computerCount++;

        }
        else if (computerSelection === 'paper'){
            winner = `You Win, ${playerSelection} beats ${computerSelection}`;
            playerCount++;

        }
    }

    return winner.toUpperCase();

}

let playerSelection ;

const buttonsCollection = document.querySelector('#buttons');
buttonsCollection.addEventListener('click', clicked, false);
let heading = document.getElementById('winner-heading');
let yourScore = document.getElementById('your-score');
let compScore = document.getElementById('comp-score');
let finalWinner = document.getElementById('final-Winner');
let newGameButton = document.getElementById('play-again-button');
newGameButton.style.display = "none";

let count = 0;

    function clicked(e){
        finalWinner.style.display = "none";
        yourScore.style.display = "block";
        compScore.style.display = "block";
        heading.style.display = "block";
        let computerSelection = computerPlay().toLowerCase();
        if(e.target !== e.currentTarget){
            playerSelection = e.target.id;
            let winner = playGame(playerSelection,computerSelection);
            count++;
            heading.textContent = winner;
        }
        e.stopPropagation();

        yourScore.textContent = `Your Score: ${playerCount}`
        compScore.textContent = `Computer Score: ${computerCount}`

        if(count == 5){
            newGameButton.style.display = "inline";
            finalWinner.style.display = "block";

            buttonsCollection.removeEventListener('click', clicked, false);

            if (playerCount>computerCount){
                finalWinner.textContent = "You won the best of 5"
            }
            else if(computerCount>playerCount){
                finalWinner.textContent = "Computer won the best of 5"

            }
            else{
                finalWinner.textContent = "Tied the best of 5"
            }
            count = 0;
            computerCount = 0;
            playerCount = 0;
            newGameButton.addEventListener('click', again, false);
        }

        function again(){
            newGameButton.style.display = "none";
            finalWinner.style.display = "none";
            yourScore.style.display = "none";
            compScore.style.display = "none";
            heading.style.display = "none";
            buttonsCollection.addEventListener('click', clicked, false);
        }

    }



