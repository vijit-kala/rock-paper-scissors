const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const setUserChoice = (userChoice) => {};

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

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoice}\nCPU chose: ${computerChoice}`);
  console.log(gameLogic(computerChoice, userChoice));
};

let userChoice = ''; // Setting up a global variable

const buttonClass = document.querySelectorAll('.choice-btn');

buttonClass.forEach((button) =>
  button.addEventListener('click', () => {
    const messageSpan = document.querySelector('.msg');
    messageSpan.textContent = `You chose: ${button.outerText.toLowerCase()}`;

    // alert(`You chose:: ${button.outerText.toLowerCase()}`);
    console.log(button.outerText);
    userChoice = button.outerText.toLowerCase();
    console.log(userChoice);
    game(userChoice);
  })
);
