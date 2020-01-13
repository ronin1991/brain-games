import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcom = () => console.log('\nWelcome to the Brain Games!');

const getUserName = () => readlineSync.question('\nMay I have your name?: ');

const getUserInput = (strInput) => readlineSync.question(strInput);

const outUserName = (name) => console.log(`Hello, ${name}!\n`);

// const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const userOutput = (str) => console.log(str);

const greetingUser = (str) => {
  welcom();
  userOutput(str);
  const name = getUserName();
  outUserName(name);
  return name;
};

const gameEngine = (func, condition) => {
  const name = greetingUser(condition);

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

  console.log(`Congratulations, ${name}!`);
};

export {
  welcom, getRandomInt, getUserInput,
  getUserName, gameEngine,
  greetingUser, outUserName,
};
