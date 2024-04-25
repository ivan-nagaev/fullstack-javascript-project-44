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
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
  }

  return userName;
};

// get random number, ${num} -> number up to
const randomNum = (num) => Math.floor(Math.random() * num) + 1;

// get math operations '+', '-', '*'
const mathOperations = () => {
  const mathOperations = ['+', '-', '*'];
  const checkEl = Math.floor(Math.random() * mathOperations.length);

  return mathOperations[checkEl];
};

// get gcd from numbers
const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

export { greetings, randomNum, mathOperations, gcd };
