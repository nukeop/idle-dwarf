var _ = require('lodash');

function totalMiningBonus(buildings) {
	var totalBonus = 0;

	_.forEach(buildings, building => {
		totalBonus += building.bonus * building.number;
	});

	return totalBonus;
}

function nextPrice(building) {
	return building.currentPrice * building.priceIncrease;
}

module.exports = {
	totalMiningBonus
}