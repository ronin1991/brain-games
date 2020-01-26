import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';

const operations = '+-*';
const condition = 'What is the result of the expression?';

const calculate = () => {
  const oneOperand = getRandomInt(1, 200);
  const twoOperand = getRandomInt(1, 200);
  const numberOperations = getRandomInt(0, operations.length);
  const randomOperation = operations[numberOperations];
  let сalculationResult;

  switch (randomOperation) {
    case '+':
      сalculationResult = oneOperand + twoOperand;
      break;

    case '-':
      сalculationResult = oneOperand - twoOperand;
      break;

    case '*':
      сalculationResult = oneOperand * twoOperand;
      break;

    default:
      break;
  }
  const question = `${oneOperand} ${randomOperation} ${twoOperand}`;
  return cons(сalculationResult, question);
};

const gamePerformer = () => {
  engine(calculate, condition);
};

export default gamePerformer;
