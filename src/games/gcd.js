import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';

const condition = ('Find the greatest common divisor of given numbers.');
const findNode = (oneOperand, twoOperand) => {
  const smallestNumber = (oneOperand > twoOperand) ? twoOperand : oneOperand;
  const greaterNumber = (oneOperand < twoOperand) ? twoOperand : oneOperand;

  const iter = (acc) => {
    if ((smallestNumber % acc) === 0 && (greaterNumber % acc) === 0) {
      return acc;
    }

    return iter(acc - 1);
  };

  return iter(smallestNumber);
};

const findCommonDivisor = () => {
  const oneOperand = getRandomInt(1, 100);
  const twoOperand = getRandomInt(1, 100);

  const result = findNode(oneOperand, twoOperand);
  const question = `${oneOperand}  ${twoOperand}`;

  return cons(result, question);
};

const gamePerformer = () => {
  engine(findCommonDivisor, condition);
};

export default gamePerformer;
