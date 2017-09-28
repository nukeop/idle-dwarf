import {
  HASH_ACCEPTED
} from '../actions/miner';

import {
  SELL_MINERALS,
  LOAD_BUILDINGS_DEFINITIONS,
  INIT_CURRENT_BUILDINGS,
  BUY_BUILDING
} from '../actions/game';

import {
  totalMiningBonus
} from '../utils/game';

const initialState = {
  buildingsDefinitions: [],
  currentBuildings: [],
  currentMinerals: 0,
  currentCrowns: 0,
  allTimeMinerals: 0,
  allTimeCrowns: 0,
  mineralExchangeRate: 0.1,
  totalBonus: 0
};

export default function GameReducer(state=initialState, action) {
  switch(action.type) {
    case HASH_ACCEPTED:
      return Object.assign({}, state, {
        currentMinerals: state.currentMinerals + 256 * (1 + state.totalBonus)
      });
    case SELL_MINERALS:
      return Object.assign({}, state, {
        currentMinerals: state.currentMinerals - action.payload,
        currentCrowns: state.currentCrowns + action.payload * state.mineralExchangeRate
      });
    case LOAD_BUILDINGS_DEFINITIONS:
      if(!state.buildingsDefinitions || state.buildingsDefinitions.length === 0) {
        return Object.assign({}, state, {
          buildingsDefinitions: action.payload.buildingsDefinitions
        });
      }
    case INIT_CURRENT_BUILDINGS:
      if(!state.currentBuildings || state.currentBuildings.length === 0) {
        return Object.assign({}, state, {
          currentBuildings: action.payload
        });
      }
    case BUY_BUILDING:
      return Object.assign({}, state, {
        currentBuildings: action.payload.currentBuildings,
        currentCrowns: state.currentCrowns - action.payload.price,
        totalBonus: totalMiningBonus(action.payload.currentBuildings)
      });
    default:
      return state;
  }
}
