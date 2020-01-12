import { cons } from '@hexlet/pairs';
import { getRandomInt, getUserInput } from '../../index';

const condition = ('Find the greatest common divisor of given numbers.');

const gameLogic = () => {
  const oneOperand = getRandomInt(1, 100);
  const twoOperand = getRandomInt(1, 100);
  console.log(`Question: ${oneOperand}  ${twoOperand}`);
  const getInput = +getUserInput('Your answer: ');

  const recurs = () => {
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
  const result = recurs();
  const resultСomparison = getInput === result;
  console.log(resultСomparison);
  return cons(resultСomparison, cons(getInput, result));
};

export { condition, gameLogic };
