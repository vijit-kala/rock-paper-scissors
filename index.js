// Global Variables
let userChoice = '';
let userScore = 0;
let cpuScore = 0;
let gameOverIndicator = false; // Indicates if any one player has 5 points.

// Selectors
const buttonClass = document.querySelectorAll('.choice-btn');
const userScoreSelector = document.querySelector('.user-score');
const cpuScoreSelector = document.querySelector('.cpu-score');

const userChoiceSelector = document.querySelector('#user-choice');
const cpuChoiceSelector = document.querySelector('#cpu-choice');

const resultSelector = document.querySelector('#result');

const CHOICES = ['rock', 'paper', 'scissors'];

window.onload = () => {
  console.log('App loaded!');
  userScoreSelector.textContent = userScore;
  cpuScoreSelector.textContent = cpuScore;
};

buttonClass.forEach((button) =>
  button.addEventListener('click', () => {
    userChoiceSelector.textContent = '';
    cpuChoiceSelector.textContent = '';

    userChoice = button.outerText.toLowerCase().trim();
    const cpuChoice = getComputerChoice();

    setTimeout(() => {
      userChoiceSelector.textContent = `You chose: ${userChoice}`;
      cpuChoiceSelector.textContent = `CPU chose: ${cpuChoice}`;
    }, 100);

    setTimeout(() => {
      // gameLogic(cpuChoice, userChoice);
      if (gameOverIndicator) {
        if (cpuScore > userScore) alert('CPU wins!');
        else alert('User wins');
      } else {
        // gameLogic(cpuChoice, userChoice);
        const result = game(userChoice, cpuChoice);
        console.log(result);
        if (result === 'user') {
          resultSelector.textContent = `User won this round! Play on.`;
          userScoreSelector.textContent = ++userScore;
        } else if (result === 'cpu') {
          resultSelector.textContent = `CPU won this round! Play on.`;
          cpuScoreSelector.textContent = ++cpuScore;
        } else {
          resultSelector.textContent = 'Draw! Play on.';
        }

        if (cpuScore === 5 || userScore === 5) {
          resultSelector.textContent = `${result.toUpperCase()} won the game! Please refresh.`;
          buttonClass.forEach((button) => (button.disabled = true));
          gameOverIndicator = true;
        }
      }
    }, 200);

    // alert(`You chose:: ${button.outerText.toLowerCase()}`);
    console.log(button.outerText);

    // console.log(userChoice);
    // game(userChoice);
  })
);

const getComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const game = (userChoice, cpuChoice) => {
  console.log(userChoice, cpuChoice);
  if (userChoice === 'rock') {
    if (cpuChoice === 'rock') return 'draw';
    else if (cpuChoice === 'scissors') return 'user';
    else return 'cpu';
  } else if (userChoice === 'paper') {
    if (cpuChoice === 'paper') return 'draw';
    else if (cpuChoice === 'rock') return 'user';
    else return 'cpu';
  } else {
    if (cpuChoice === 'scissors') return 'draw';
    else if (cpuChoice === 'paper') return 'user';
    else return 'cpu';
  }
};
