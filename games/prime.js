import readLineSync from 'readline-sync';
import { greetings, randomNum, isPrime } from '../src/index.js';

const userName = greetings('prime');

export default () => {
  let count = 0;
  let game = true;

  while (count < 3 && game) {
    const randomNumber = randomNum(20);
    const result = isPrime(randomNumber);

    console.log(`Question: ${randomNumber}`);
    let userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === 'yes') {
      userAnswer = true;
    } else {
      userAnswer = false;
    }

    if (result === userAnswer) {
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
