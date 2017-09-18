export const SELL_MINERALS = 'SELL_MINERALS';

export function sellMinerals(n) {
  return {
    type: SELL_MINERALS,
    payload: n
  }
}
