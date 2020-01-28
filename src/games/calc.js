
import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';

const operations = '+-*';
const condition = 'What is the result of the expression?';

const calculate = () => {
  const firstOperand = getRandomNum(1, 200);
  const secondOperand = getRandomNum(1, 200);
  const numberOperations = getRandomNum(0, operations.length);
  const randomOperation = operations[numberOperations];
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
  gameEngine(calculate, condition);
};

export default launchGame;
