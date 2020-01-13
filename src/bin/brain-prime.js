#!/usr/bin/env  node
import { gameLogic, condition } from './games/prime';
import { gameEngine } from '../index';

console.log(52 % 2);
gameEngine(gameLogic, condition);
