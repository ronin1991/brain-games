import { cons } from '@hexlet/pairs';
import { getRandomInt, getUserInput } from '../../index';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const randomNum = getRandomInt(1, 101);
  console.log(`Question: ${randomNum}`);
  const getInput = getUserInput('Your answer: ');
  let result;

  if ((randomNum % 2) === 0) {
    result = 'yes';
  }

  if ((randomNum % 2) !== 0) {
    result = 'no';
  }

  const resultСomparison = getInput === result;

  return cons(resultСomparison, cons(getInput, result));
};

export { gameLogic, condition };
