import {
  HASH_ACCEPTED,
  START_MINING,
  STOP_MINING
} from '../actions/miner';

const initialState = {
  running: true,
  hashesAccepted: 0
};

export default function MinerReducer(state=initialState, action) {
  switch(action.type) {
    case HASH_ACCEPTED:
      return Object.assign({}, state, {
        hashesAccepted: action.payload
      });
    case START_MINING:
      return Object.assign({}, state, {
        running: true
      });
    case STOP_MINING:
      return Object.assign({}, state, {
        running: false
      });
    default:
      return state;
  }
}
