export const NO_CHANGE = 'NO_CHANGE';
export const LOAD_BUILDINGS_DEFINITIONS = 'LOAD_BUILDINGS_DEFINITIONS';
export const INIT_CURRENT_BUILDINGS = 'INIT_CURRENT_BUILDINGS';
export const SELL_MINERALS = 'SELL_MINERALS';
export const BUY_BUILDING = 'BUY_BUILDING';

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
    building.currentPrice = building.initialPrice;
  });

  return {
    type: INIT_CURRENT_BUILDINGS,
    payload: currentBuildings
  }
}

export function buyBuilding(buildingName, n, currentBuildings, currentCrowns) {
  if (!buildingName || !n || !currentBuildings || !currentCrowns) {
    return {
      type: NO_CHANGE
    }
  }

  let buildingToBuy = _(currentBuildings).filter(['name', buildingName]).head();

  let price = buildingToBuy.initialPrice;
  for (let i=0; i<buildingToBuy.number + n - 1; i++) {
    price = price * buildingToBuy.priceIncrease;
  }
  price = _.round(price, 1);

  if (price <= currentCrowns) {
    buildingToBuy.number++;

    return {
      type: BUY_BUILDING,
      payload: {
        currentBuildings,
        price
      }
    }
  } else {
    return {
      type: NO_CHANGE,
      payload: null
    }
  }
}
