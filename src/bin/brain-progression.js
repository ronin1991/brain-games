#!/usr/bin/env  node
import { gameLogic, condition } from './games/progression';
import { gameEngine } from '../index';

gameEngine(gameLogic, condition);
