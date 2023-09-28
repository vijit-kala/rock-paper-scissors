const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getUserChoice = () => {
  const userInput = prompt('Choose: Rock, Paper or Scissor.').toLowerCase();
  if (choices.indexOf(userInput) != -1) return userInput;
  else {
    alert('Not a proper input, please reload!');
    return 'Error';
  }
};

const gameLogic = (computerChoice, userChoice) => {
  if (computerChoice === userChoice) {
    alert(`Both chose ${computerChoice}! It's a draw!`);
    return 'Draw';
  } else {
    if (computerChoice === 'rock') {
      userChoice === 'paper'
        ? alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so user wins!`
          )
        : alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so CPU wins`
          );
    } else if (computerChoice === 'paper') {
      userChoice === 'scissors'
        ? alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so user wins!`
          )
        : alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so CPU wins`
          );
    } else {
      userChoice === 'rock'
        ? alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so user wins!`
          )
        : alert(
            `User chose ${userChoice} and CPU chose ${computerChoice}, so CPU wins`
          );
    }
    return 'Not a Draw';
  }
};

const game = () => {
  const computerChoice = getComputerChoice();
  const userChoice = getUserChoice();
  console.log(`User chose: ${userChoice}\nCPU chose: ${computerChoice}`);
  console.log(gameLogic(computerChoice, userChoice));
};
