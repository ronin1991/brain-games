#!/usr/bin/env  node
import { gameLogic, condition } from './games/calc';
import { gameEngine } from '../index';

gameEngine(gameLogic, condition);
