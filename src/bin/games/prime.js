import { cons } from '@hexlet/pairs';
import { getRandomInt, getUserInput } from '../../index';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  let resultСomparison;
  const randomNum = getRandomInt(1, 101);
  console.log(`Question: ${randomNum}`);
  const getInput = getUserInput('Your answer: ');

  const isPrime = () => {
    const iter = (counter, acc) => {
      if (counter === 1) return 'yes';

      if (acc % counter === 0) return 'no';

      return iter(counter - 1, acc);
    };
    return iter(randomNum - 1, randomNum);
  };

  const result = isPrime();
  console.log(result);
  if (result === 'yes' && getInput === 'yes') {
    resultСomparison = 'yes';
  }

  if (result === 'no' && getInput === 'no') {
    resultСomparison = 'no';
  }

  return cons(resultСomparison, cons(getInput, result));
};

export { gameLogic, condition };
