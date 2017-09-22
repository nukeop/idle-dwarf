const buildingsDefinitions = [
  {
    name: 'Dwarf',
    description: 'Mountain Dwarves come from the larger, more civilized communities of the mountains, and are renowned for the quality of their craftsmanship.',
    initialPrice: 50,
    priceIncrease: 1.1,
    bonus: 0.01,
    unlockAt: 0
  }, {
    name: 'Deep Dwarf',
    description: 'A cousin of the mountain dwarf, with a strong empathy for the earth and the ability to intrinsically find minerals.',
    initialPrice: 50000,
    priceIncrease: 1.15,
    bonus: 0.05,
    unlockAt: 35000
  }
];

module.exports = { buildingsDefinitions };
