#!/usr/bin/env  node
import { gameLogic, condition } from './games/prime';
import { gameEngine } from '../index';

gameEngine(gameLogic, condition);
