import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcom = () => console.log('\nWelcome to the Brain Games!');

const getUserName = () => readlineSync.question('\nMay I have your name?: ');

const userInput = (strInput) => readlineSync.question(strInput);

const outUserName = (name) => console.log(`Hello, ${name}!\n`);

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const greetingUser = () => {
  welcom();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = getUserName();
  outUserName(name);
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
    const userAnswer = userInput('Your answer: ');
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

const gameEngine = (func) => {
  const name = greetingUser();

  for (let i = 0; i < 3; i++) {
    const getResultFunc = func();
    const boolFunc = car(getResultFunc);
    const inputUser = car(cdr(getResultFunc));
    const resultFunc = cdr(cdr(getResultFunc));

    if (!boolFunc) {
      console.log(`'${inputUser}' is wrong answer ;(. Correct answer was '${resultFunc}'.Let's try again, ${name}!'`);
      return;
    }

    console.log('Correct!');
  }

  console.log('Congratulations, Sam!');
};

export {
  welcom, getRandomInt, userInput,
  getUserName, gameLogic, gameEngine,
  greetingUser, outUserName,
};
