import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';

const isEven = (number) => number % 2 === 0;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkEven = () => {
  const gameQuestion = getRandomInt(1, 101);
  const result = isEven(gameQuestion) ? 'yes' : 'no';
  const question = gameQuestion;

  return cons(result, question);
};

const gamePerformer = () => {
  engine(checkEven, condition);
};

export default gamePerformer;
