import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundCount = 3;

const gameEngine = (getDataRound, condition) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(condition);
  const getName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${getName}!`);

  for (let i = 0; i < roundCount; i += 1) {
    const dataPair = getDataRound();
    const сalculationResult = `${car(dataPair)}`;
    const gameQuestion = cdr(dataPair);
    console.log(`Question: ${gameQuestion}`);
    const answerGame = readlineSync.question('Your answer: ');

    if (сalculationResult !== answerGame) {
      console.log(`'${answerGame}' is wrong answer ;(. Correct answer was '${сalculationResult}'\n.Let's try again, ${getName}!'`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${getName}!`);
};

export default gameEngine;
