import {
  HASH_ACCEPTED
} from '../actions/miner';

const initialState = {
  currentMinerals: 0,
  currentCrowns: 0
};

export default function GameReducer(state=initialState, action) {
  switch(action.type) {
    case HASH_ACCEPTED:
      return Object.assign({}, state, {
        currentMinerals: action.payload + state.currentMinerals
      });
    default:
      return state;
  }
}
