// Global Variables
let userChoice = '';
let userScore = 0;
let cpuScore = 0;

// Selectors
const buttonClass = document.querySelectorAll('.choice-btn');
const userScoreSelector = document.querySelector('.user-score');
const cpuScoreSelector = document.querySelector('.cpu-score');

const userChoiceSelector = document.querySelector('#user-choice');
const cpuChoiceSelector = document.querySelector('#cpu-choice');

const CHOICES = ['rock', 'paper', 'scissors'];

window.onload = () => {
  console.log('App loaded!');
  userScoreSelector.textContent = userScore;
  cpuScoreSelector.textContent = cpuScore;
};

buttonClass.forEach((button) =>
  button.addEventListener('click', () => {
    const messageSpan = document.querySelector('.msg');
    messageSpan.textContent = '';
    messageSpan.textContent = `You chose: ${button.outerText.toLowerCase()}`;

    // alert(`You chose:: ${button.outerText.toLowerCase()}`);
    console.log(button.outerText);
    userChoice = button.outerText.toLowerCase();
    console.log(userChoice);
    game(userChoice);
  })
);

// TODO: Work on the logic for event listeners and make the UI more softer

const getComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

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
