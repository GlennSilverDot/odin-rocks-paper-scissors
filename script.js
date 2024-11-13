console.log('Let\'s Play Rock, Paper, Scissors!');

/*--------------- Declarations ---------------*/

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissors'];

    let generatedNum = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${choice[generatedNum]}`);

    return choice[generatedNum];
}

function getHumanChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    let chosen = prompt('Rock, Paper, or Scissors?').toLowerCase();

    switch(chosen){
        case 'rock':
            return choice[0];

        case 'paper':
            return choice[1];

        case 'scissors':
            return choice[2];

        default:
            console.log('Invalid option.');
    }
}

function playRound(humanChoice, computerChoice){
    let winner;

    if(humanChoice == 'rock' && computerChoice == 'scissors'){
        winner = 0;
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        winner = 0;
    }else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        winner = 0;
    }else if(humanChoice == computerChoice){
        winner = 2;
    }else{
        winner = 1;
    }

    return winner;
}
/*--------------- Code Logic -----------------*/

function playGame(){
    var humanChosen;
    var computerChosen;
    var playerScore = 0;
    var computerScore = 0;

    for(i = 0; i < 5; i++){
        humanChosen = getHumanChoice();
        computerChosen = getComputerChoice();

        console.log(playerScore + "  |  " + computerScore);

        switch(playRound(humanChosen, computerChosen)){
            case 0:
                ++playerScore;
                console.log('You win this round! ');
                break;
            case 1:
                ++computerScore;
                console.log('You lose this round! ');
                break;
            case 2:
                console.log('It\'s a tie! ');
                break;
        }
        console.log(`CURRENT SCORES\nPLAYER: ${playerScore}\nCOMPUTER: ${computerScore}`);
    }

    if(playerScore > computerScore){
        console.log('You won the whole thing!');
    }else if(playerScore < computerScore){
        console.log('You lost the whole thing. Gosh you suck!');
    }else{
        console.log('I don\'t know how but you managed to tie the game.');
    }
}

playGame();