import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';


const condition = 'What number is missing in the progression?';
const lengthProgression = 10;

const createDataRound = () => {
  let questoin = '';
  let result = 0;
  const start = getRandomNum(1, 10);
  const numberQuestion = getRandomNum(start, lengthProgression - 1);
  const diff = getRandomNum(2, 5);
  const arr = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    arr.push(start + diff * i);
  }

  result = arr[numberQuestion];
  arr[numberQuestion] = '..';

  for (let i = 0; i < lengthProgression; i += 1) {
    questoin = `${questoin} ${arr[i]}`;
  }


  return cons(result, questoin);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
