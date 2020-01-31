import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';

const condition = ('Find the greatest common divisor of given numbers.');
const findGreatestCommonFactor = (firstOperand, secondOperand) => {
  const smallestNumber = (firstOperand > secondOperand) ? secondOperand : firstOperand;
  const greaterNumber = (firstOperand < secondOperand) ? secondOperand : firstOperand;

  const iter = (divider) => {
    if ((smallestNumber % divider) === 0 && (greaterNumber % divider) === 0) {
      return divider;
    }

    return iter(divider - 1);
  };

  return iter(smallestNumber);
};

const createDataRound = () => {
  const firstOperand = getRandomNum(1, 100);
  const secondOperand = getRandomNum(1, 100);

  const result = findGreatestCommonFactor(firstOperand, secondOperand);
  const question = `${firstOperand}  ${secondOperand}`;

  return cons(result, question);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
