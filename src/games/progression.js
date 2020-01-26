import { cons } from '@hexlet/pairs';
import { getRandomInt, gameEngine as engine } from '../index';


const condition = 'What number is missing in the progression?';

const findMissingNumber = () => {
  let arrQuestoin = '';
  let result = 0;
  const lengthProgression = 10;
  const gameQuestion = getRandomInt(2, 10);
  const randomIndex = getRandomInt(2, 6);
  const arr = [];

  for (let i = 0, j = 1; i < lengthProgression; i += 1) {
    arr.push(j);
    j += randomIndex;
  }

  result = arr[gameQuestion];
  arr[gameQuestion] = '..';

  for (let i = 0; i < lengthProgression; i += 1) {
    arrQuestoin = `${arrQuestoin} ${arr[i]}`;
  }
  const question = arrQuestoin;

  return cons(result, question);
};

const gamePerformer = () => {
  engine(findMissingNumber, condition);
};

export default gamePerformer;
