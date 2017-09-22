import {
  HASH_ACCEPTED
} from '../actions/miner';

import {
  SELL_MINERALS,
  LOAD_BUILDINGS_DEFINITIONS
} from '../actions/game';

const initialState = {
  buildingsDefinitions: [],
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
      return Object.assign({}, state, {
        currentMinerals: state.currentMinerals - action.payload,
        currentCrowns: state.currentCrowns + action.payload * state.mineralExchangeRate
      });
    case LOAD_BUILDINGS_DEFINITIONS:
      if(!state.buildingsDefinitions) {
        return Object.assign({}, state, {
          buildingsDefinitions: action.payload.buildingsDefinitions
        });
      }
    default:
      return state;
  }
}
