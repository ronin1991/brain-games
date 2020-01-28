import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';

const isEven = (number) => number % 2 === 0;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createDataRound = () => {
  const gameQuestion = getRandomNum(1, 101);
  const result = isEven(gameQuestion) ? 'yes' : 'no';

  return cons(result, gameQuestion);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
