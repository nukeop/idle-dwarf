import { combineReducers } from 'redux';

import GameReducer from './game';
import MinerReducer from './miner';

const rootReducer = combineReducers({
  game: GameReducer,
  miner: MinerReducer
});

export default rootReducer;
