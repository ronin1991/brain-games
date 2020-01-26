import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';


const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (counter, acc) => {
    if (counter === 1) return 'yes';

    if (acc % counter === 0) return 'no';

    return iter(counter - 1, acc);
  };
  return iter(number - 1, number);
};

const indicatePrime = () => {
  const gameQuestion = getRandomInt(1, 101);
  const result = isPrime(gameQuestion);
  const question = gameQuestion;

  return cons(result, question);
};

const gamePerformer = () => {
  engine(indicatePrime, condition);
};

export default gamePerformer;
