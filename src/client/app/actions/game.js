export const NO_CHANGE = 'NO_CHANGE';
export const LOAD_BUILDINGS_DEFINITIONS = 'LOAD_BUILDINGS_DEFINITIONS';
export const INIT_CURRENT_BUILDINGS = 'INIT_CURRENT_BUILDINGS';
export const SELL_MINERALS = 'SELL_MINERALS';

var definitions = require('../config/buildings');

var _ = require('lodash');

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
  return {
    type: LOAD_BUILDINGS_DEFINITIONS,
    payload: definitions
  }
}

export function initCurrentBuildings() {
  let currentBuildings = _.cloneDeep(definitions).buildingsDefinitions;
  currentBuildings.forEach(building => {
    building.number = 0;
  });
  
  return {
    type: INIT_CURRENT_BUILDINGS,
    payload: currentBuildings
  }
}
