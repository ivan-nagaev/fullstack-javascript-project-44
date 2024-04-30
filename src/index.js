import readlineSync from 'readline-sync';

// greetings user and get name for all brain-games
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
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Welcome to the brain-games!');
  }

  return userName;
};

// get random number, ${num} -> number up to
const randomNum = (num) => Math.floor(Math.random() * num) + 1;

// get math operations '+', '-', '*' for calc game
const mathOperations = () => {
  const operations = ['+', '-', '*'];
  const checkEl = Math.floor(Math.random() * operations.length);

  return operations[checkEl];
};

// get gcd from numbers for gcd game
const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

// get prime number for prime game
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

// fail message
const failGame = (userName, result) => {
  const fail = `'${userName}' is wrong answer ;(. Correct answer was '${result}'.`;

  console.log(fail);
  console.log(`Let's try again, ${userName}!`);

  return false;
};

export {
  greetings,
  randomNum,
  mathOperations,
  gcd,
  isPrime,
  failGame,
};
