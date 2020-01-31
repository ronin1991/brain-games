
import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';

const operations = '+-*';
const condition = 'What is the result of the expression?';

const createDataRound = () => {
  const firstOperand = getRandomNum(1, 200);
  const secondOperand = getRandomNum(1, 200);
  const operationsIndex = getRandomNum(0, operations.length - 1);
  const randomOperation = operations[operationsIndex];
  let сalculationResult;

  switch (randomOperation) {
    case '+':
      сalculationResult = firstOperand + secondOperand;
      break;

    case '-':
      сalculationResult = firstOperand - secondOperand;
      break;

    case '*':
      сalculationResult = firstOperand * secondOperand;
      break;

    default:
      break;
  }
  const question = `${firstOperand} ${randomOperation} ${secondOperand}`;
  return cons(сalculationResult, question);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
