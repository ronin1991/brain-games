import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gameEngine = (func, condition) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(condition);
  const getName = readlineSync.question('\nMay I have your name?: ');
  console.log(getName);

  for (let i = 0; i < 3; i++) {
    const getPair = func();
    const сalculationResult = car(getPair);
    const gameAnswer = cdr(getPair);
    console.log(gameAnswer);

    const getInput = readlineSync.question('Your answer: ');

    if (сalculationResult != getInput) {
      console.log(`'${getInput}' is wrong answer ;(. Correct answer was '${сalculationResult}'.Let's try again, ${getName}!'`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${getName}!`);
};

export { getRandomInt, gameEngine };
