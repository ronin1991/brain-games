import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';


const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (counter, acc) => {
    if (counter === 1) return true;

    if (acc % counter === 0) return false;

    return iter(counter - 1, acc);
  };
  return iter(number - 1, number);
};

const createDataRound = () => {
  const gameQuestion = getRandomNum(1, 101);
  const result = isPrime(gameQuestion) ? 'yes' : 'no';
  const question = gameQuestion;

  return cons(result, question);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
