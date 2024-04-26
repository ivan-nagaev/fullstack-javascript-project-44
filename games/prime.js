import readLineSync from 'readline-sync';
import { greetings, randomNum, prime } from '../src/index.js';

const userName = greetings('prime');

export default () => {
  let count = 0;
  let game = true;

  while (count < 3 && game) {
    const randomNumber = randomNum(20);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readLineSync.question(`Your answer: `);

    if (prime(randomNumber) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          userAnswer === 'no' ? 'yes' : 'no'
        }'.`
      );
      game = false;
      return console.log(`Let's try again, ${userName}!`);
    }

    count += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
