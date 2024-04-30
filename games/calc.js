// brain-calc games

import readLineSync from 'readline-sync';
import {
  greetings,
  randomNum,
  mathOperations,
  failGame,
}
  from '../src/index.js';

const userName = greetings('calc');

export default () => {
  let count = 0;
  let game = true;

  while (count < 3 && game) {
    const num1 = randomNum(10);
    const num2 = randomNum(15);
    const operations = mathOperations();

    let result = 0;

    console.log(`Question: ${num1} ${operations} ${num2}`);

    switch (operations) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = 0;
    }

    const userAnswer = Number(readLineSync.question('Your answer: '));

    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      game = failGame(userName, result);
      return game;
    }

    count += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
