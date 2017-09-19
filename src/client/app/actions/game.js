export const SELL_MINERALS = 'SELL_MINERALS';

export function sellMinerals(n, currentMinerals, mineralExchangeRate) {
  if (currentMinerals >= n) {
    return {
      type: SELL_MINERALS,
      payload: n
    }
  }

}
