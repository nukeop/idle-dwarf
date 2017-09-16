import { combineReducers } from 'redux';

import MinerReducer from './miner';

const rootReducer = combineReducers({
  miner: MinerReducer
});

export default rootReducer;
