import { addOrCreate } from '../utils/localstorage';

export const SELL_MINERALS = 'SELL_MINERALS';

export function sellMinerals(n, currentMinerals) {

  if (currentMinerals >= n) {
  //  addOrCreate('currentMinerals', n);

    return {
      type: SELL_MINERALS,
      payload: n
    }
  }

}
