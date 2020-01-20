import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';

const isEven = (number) => number % 2 === 0;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const gameQuestionNumber = getRandomInt(1, 101);
  let result;

  if (isEven(gameQuestionNumber)) {
    result = 'yes';
  }

  if (!isEven(gameQuestionNumber)) {
    result = 'no';
  }

  return cons(result, `Question: ${gameQuestionNumber}`);
};

const gameFunc = () => {
  engine(gameLogic, condition);
};

export default gameFunc;
