import readLineSync from 'readline-sync';
import { greetings, randomNum } from '../src/index.js';

const userName = greetings('progression');

export default () => {
  let count = 0;
  let game = true;

  // length of array
  const numbersLegth = 10;

  while (count < 3 && game) {
    const numbers = [];

    // add first element in array
    numbers.push(randomNum(5));

    // steps on array and check secret number
    const step = randomNum(4);
    const secretNumber = randomNum(numbersLegth - 1);
    let missingValue = 0;

    for (let i = 0; i < numbersLegth; i += 1) {
      numbers.push(numbers[i] + step);
      if (i === secretNumber) {
        missingValue = numbers[i];
        numbers[i] = '..';
      }
    }

    console.log(`Question: ${numbers.toString().replaceAll(',', ' ')}`);
    const userAnswer = Number(readLineSync.question('Your answer: '));

    if (userAnswer === missingValue) {
      console.log('Correct');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${missingValue}'.`
      );
      game = false;
      return console.log(`Let's try again, ${userName}!`);
    }

    count += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
