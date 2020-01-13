#!/usr/bin/env  node
import { gameLogic, condition } from './games/even';
import { gameEngine } from '../index';

gameEngine(gameLogic, condition);
