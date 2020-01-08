import readlineSync from 'readline-sync';

const greetingByName = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello,${name}!`);
};

const welcom = () => console.log('Welcome to the Brain Games!');

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};


const isValidationAnswer = (functionValidation, userAnswer, value) => {
  if (functionValidation(value) && userAnswer === 'yes') return true;
  if (!functionValidation(value) && userAnswer === 'no') return true;
  return false;
};

const gameLogic = (nameUser) => {
  const iter = (acc) => {
    const intGame = getRandomInt(1, 20);
    console.log(`Question: ${intGame}`);
    const userAnswer = getUserAnswer();
    const isTrathCheck = isValidationAnswer(isEven, userAnswer, intGame);

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log('is wrong answer');
      return;
    }
    if (acc === 3) {
      console.log(`Congratulations, ${nameUser}!`);
      return;
    }

    if (isTrathCheck) {
      acc += 1;
      console.log('Correct!');
      iter(acc);
    }

    if (!isTrathCheck && userAnswer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${nameUser}!`);
    }

    if (!isTrathCheck && userAnswer === 'no') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${nameUser}!`);
    }
  };
  iter(1);
};

const checkEvenGame = () => {
  welcom();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const name = getUserName();
  gameLogic(name);
};


export {
  welcom, getRandomInt, checkEvenGame, getUserAnswer,
  getUserName, greetingByName,
};
