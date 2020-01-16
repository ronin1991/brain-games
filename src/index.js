import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEngine = (func, condition) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('\nMay I have your name?: ');
  console.log(name);

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

export { getRandomInt, gameEngine, isEven };
