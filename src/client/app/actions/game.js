export const NO_CHANGE = 'NO_CHANGE';
export const LOAD_BUILDINGS_DEFINITIONS = 'LOAD_BUILDINGS_DEFINITIONS';
export const SELL_MINERALS = 'SELL_MINERALS';

export function sellMinerals(n, currentMinerals, mineralExchangeRate) {
  if (currentMinerals >= n) {
    return {
      type: SELL_MINERALS,
      payload: n
    }
  } else {
    return {
      type: NO_CHANGE,
      payload: null
    }
  }
}

export function loadBuildingsDefinitions() {
  let definitions = require('../config/buildings');

  return {
    type: LOAD_BUILDINGS_DEFINITIONS,
    payload: definitions
  }
}
