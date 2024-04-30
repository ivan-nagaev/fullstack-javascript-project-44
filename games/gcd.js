import readLineSync from 'readline-sync';
import { greetings, randomNum, gcd, failGame } from '../src/index.js';

const userName = greetings('gcd');

export default () => {
  let count = 0;
  let game = true;

  while (count < 3 && game) {
    const num1 = randomNum(20);
    const num2 = randomNum(30);
    const result = gcd(num1, num2);

    // calc divisor
    console.log(`Question: ${num1} ${num2}`);
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
