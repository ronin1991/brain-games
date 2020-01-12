import { cons } from '@hexlet/pairs';
import { getRandomInt, userInput } from '../../index';

const realize = () => {
  const operations = '+-*';
  const oneOperand = getRandomInt(1, 200);
  const twoOperand = getRandomInt(1, 200);
  const numberOperations = getRandomInt(0, 3);
  const randomOperation = operations[numberOperations];
  let result;
  console.log(`Question: ${oneOperand} ${randomOperation} ${twoOperand}`);
  const getInput = +userInput('Your answer: ');

  switch (randomOperation) {
    case '+':
      result = oneOperand + twoOperand;
      break;

    case '-':
      result = oneOperand - twoOperand;
      break;

    case '*':
      result = oneOperand * twoOperand;
      break;

    default:
      break;
  }

  const resultСomparison = getInput === result;
  return cons(resultСomparison, cons(getInput, result));
};

export default realize;
