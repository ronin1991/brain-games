import { cons } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { getRandomInt, isEven, gameEngine as engine } from '../../index';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const randomNum = getRandomInt(1, 101);
  console.log(`Question: ${randomNum}`);
  const getInput = readlineSync.question('Your answer: ');
  let result;

  if (isEven(randomNum)) {
    result = 'yes';
  }

  if (!isEven(randomNum)) {
    result = 'no';
  }

  const resultСomparison = getInput === result;

  return cons(resultСomparison, cons(getInput, result));
};

const gameFunc = () => {
  engine(gameLogic, condition);
};

export default gameFunc;
