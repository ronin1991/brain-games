#!/usr/bin/env  node
import { condition, gameLogic } from './games/gcd';
import { gameEngine } from '../index';

gameEngine(gameLogic, condition);
