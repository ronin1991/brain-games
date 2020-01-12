import {
  gameLogic, outUserName, greetingUser,
} from '../../index';

const checkEvenGame = () => {
  const name = greetingUser();
  outUserName(name);
  gameLogic(name);
};

export default checkEvenGame;
