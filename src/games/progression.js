import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';


const condition = 'What number is missing in the progression?';
const lengthProgression = 10;

const createDataRound = () => {
  let questoin = '';
  let result = 0;
  const start = getRandomNum(1, 9);
  const indexQuestion = getRandomNum(start, lengthProgression - 1);
  const diff = getRandomNum(2, 5);
  const progression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + diff * i);
  }

  result = progression[indexQuestion];
  progression[indexQuestion] = '..';

  for (let i = 0; i < lengthProgression; i += 1) {
    questoin = `${questoin} ${progression[i]}`;
  }


  return cons(result, questoin);
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
