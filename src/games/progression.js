import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';


const condition = 'What number is missing in the progression?';

const gameLogic = () => {
  let arrAnswer = '';
  let result = 0;
  const lengthProgression = 10;
  const gameQuestionNumber = getRandomInt(2, 11);
  const randomIndex = getRandomInt(2, 6);
  const arr = [];

  for (let i = 0, j = 1; i < lengthProgression; i++) {
    arr.push(j);
    j += randomIndex;
  }

  result = arr[gameQuestionNumber];
  arr[gameQuestionNumber] = '..';

  for (let i = 0; i < 10; i++) {
    arrAnswer += `${arr[i]} `;
  }

  return cons(result, `Question: ${arrAnswer}`);
};

const gameFunc = () => {
  engine(gameLogic, condition);
};

export default gameFunc;
