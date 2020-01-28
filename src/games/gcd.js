import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';

const condition = ('Find the greatest common divisor of given numbers.');
const findCommonDivisor = (oneOperand, twoOperand) => {
  const smallestNumber = (oneOperand > twoOperand) ? twoOperand : oneOperand;
  const greaterNumber = (oneOperand < twoOperand) ? twoOperand : oneOperand;

  const iter = (divider) => {
    if ((smallestNumber % divider) === 0 && (greaterNumber % divider) === 0) {
      return divider;
    }

    return iter(divider - 1);
  };

  return iter(smallestNumber);
};

const createDataRound = () => {
  const oneOperand = getRandomNum(1, 100);
  const twoOperand = getRandomNum(1, 100);

  const result = findCommonDivisor(oneOperand, twoOperand);
  const question = `${oneOperand}  ${twoOperand}`;

  return cons(result, question);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
