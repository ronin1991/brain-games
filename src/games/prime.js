import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';


const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameLogic = () => {
  const gameQuestionNumber = getRandomInt(1, 101);

  const isPrime = (number) => {
    const iter = (counter, acc) => {
      if (counter === 1) return 'yes';

      if (acc % counter === 0) return 'no';

      return iter(counter - 1, acc);
    };
    return iter(number - 1, gameQuestionNumber);
  };

  const result = isPrime(gameQuestionNumber);

  return cons(result, `Question: ${gameQuestionNumber}`);
};

const gameFunc = () => {
  engine(gameLogic, condition);
};

export default gameFunc;
