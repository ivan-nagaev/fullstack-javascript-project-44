// brain-even games

import readlineSync from 'readline-sync';
import { greetings, randomNum } from '../src/index.js';

const userName = greetings('even');

export default () => {
  const victory = `Congratulations, ${userName}!`;

  for (let i = 0; i < 3; i += 1) {
    const secretNumber = randomNum(100);

    console.log(`Question: ${secretNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes' && secretNumber % 2 === 0) {
      console.log('Correct!');
    } else if (userAnswer === 'no' && secretNumber % 2 !== 0) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${userAnswer === 'yes' ? 'no' : 'yes'}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(victory);
};
