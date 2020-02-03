import { cons } from '@hexlet/pairs';
import gameEngine from '../index';
import getRandomNum from '../utils';


const condition = 'What number is missing in the progression?';
const lengthProgression = 10;

const createDataRound = () => {
  let questoin = '';
  const start = getRandomNum(1, 8);
  const questionIndex = getRandomNum(start, lengthProgression - 1);
  const diff = getRandomNum(2, 5);
  const progression = [];
  const result = start + diff * questionIndex;

  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + diff * i);
  }

  progression[questionIndex] = '..';

  for (let i = 0; i < lengthProgression; i += 1) {
    questoin = `${questoin} ${progression[i]}`;
  }

  return cons(result, questoin.slice(1));
};

const launchGame = () => {
  gameEngine(createDataRound, condition);
};

export default launchGame;
