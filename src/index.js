import readlineSync from 'readline-sync';

// greetings user and get name
const greetings = (brainGames) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  switch (brainGames) {
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
  }

  return userName;
};

// get random number
const randomNum = () => Math.floor(Math.random() * 10) + 1;

// get math operations '+', '-', '*'
const mathOperations = () => {
  const mathOperations = ['+', '-', '*'];
  const checkEl = Math.floor(Math.random() * mathOperations.length);

  return mathOperations[checkEl];
};

export { greetings, randomNum, mathOperations };
