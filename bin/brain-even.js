#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = () => {
  const victory = `Congratulations, ${userName}!`;

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes' && randomNum % 2 === 0) {
      console.log('Correct!');
    } else if (userAnswer === 'no' && randomNum % 2 !== 0) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          userAnswer === 'yes' ? 'no' : 'yes'
        }'.`
      );
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(victory);
};

game();
