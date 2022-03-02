let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =() => {
    return Math.floor(Math.random()*10);
}

const compareGuesses = (human, computer, secret) => {
    secret = this.generateTarget;
    if(Math.abs(human) === secret) {
        return true;
    }else if((Math.abs(human) && Math.abs(computer)) === secret) {
        return true
    } else {
        return false;
    }
    const getAbs = getAbsoluteDistance(human, computer);
    checkGuess(human);
    console.log(getAbs);
}

const updateScore = (winner) =>{
    if(winner === 'human') {
        return humanScore +=1
    }else if(winner === 'computer'){
        return computerScore +=1;
    }else{
        return null;
    }
}

const advanceRound = () => {
    return currentRoundNumber = currentRoundNumber + 1;
}

// check if the human input is greater than 9
const checkGuess = (guess) => {
    if (guess > 9) {
        return windows.alert('number enetered out of range')
    }
}

//check the distance between the human's input and the guessed number
const getAbsoluteDistance = (a, b) => {
    if (a > b) {
        return Math.abs(a - b);
      }
    
      return Math.abs(b - a);
}

console.log(updateScore('human'));