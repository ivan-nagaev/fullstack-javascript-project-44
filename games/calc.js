// brain-calc games

import readLineSync from 'readline-sync';
import { greetings, randomNum, mathOperations } from '../src/index.js';

const userName = greetings('calc');

export default () => {
  let count = 0;
  let check = true;

  // console.log('What is the result of the expression?');

  while (count < 3 && check) {
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
    }

    const userAnswer = Number(readLineSync.question('Your answer: '));

    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`
      );
      check = false;
      return console.log(`Let's try again, ${userName}!`);
    }
    count += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
