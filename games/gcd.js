import readLineSync from 'readline-sync';
import { greetings, randomNum, gcd } from '../src/index.js';

const userName = greetings('gcd');

export default () => {
  let count = 0;
  let game = true;

  while (count < 3 && game) {
    const num1 = randomNum(20);
    const num2 = randomNum(30);
    const divisor = gcd(num1, num2);

    // calc divisor
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readLineSync.question('Your answer: '));

    if (userAnswer === divisor) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${divisor}'.`
      );
      game = false;
      return console.log(`Let's try again, ${userName}!`);
    }

    count += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
