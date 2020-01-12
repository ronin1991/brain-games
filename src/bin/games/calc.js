import { cons } from '@hexlet/pairs';
import { getRandomInt, getUserInput } from '../../index';

const condition = 'What is the result of the expression?';

const gameLogic = () => {
  const operations = '+-*';
  const oneOperand = getRandomInt(1, 200);
  const twoOperand = getRandomInt(1, 200);
  const numberOperations = getRandomInt(0, 3);
  const randomOperation = operations[numberOperations];
  let result;
  console.log(`Question: ${oneOperand} ${randomOperation} ${twoOperand}`);
  const getInput = +getUserInput('Your answer: ');

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

export { gameLogic, condition };
