import {
  HASH_ACCEPTED
} from '../actions/miner';

import {
  SELL_MINERALS
} from '../actions/game';

const initialState = {
  currentMinerals: 0,
  currentCrowns: 0,
  mineralExchangeRate: 0.1
};

export default function GameReducer(state=initialState, action) {
  switch(action.type) {
    case HASH_ACCEPTED:
      return Object.assign({}, state, {
        currentMinerals: state.currentMinerals + 256
      });
    case SELL_MINERALS:
      if (action.payload <= state.currentMinerals) {
        return Object.assign({}, state, {
          currentMinerals: state.currentMinerals - action.payload,
          currentCrowns: state.currentCrowns + action.payload * state.mineralExchangeRate
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}
