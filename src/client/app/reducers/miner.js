import {
  HASH_ACCEPTED,
  START_MINING,
  STOP_MINING,
  UPDATE_HASHES_PER_SECOND,
  UPDATE_THREADS_NUMBER,
  UPDATE_THROTTLE
} from '../actions/miner';

const initialState = {
  running: true,
  hashesAccepted: 0,
  hashesPerSecond: 0,
  threads: 2,
  throttle: 0.5
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
    case UPDATE_HASHES_PER_SECOND:
      return Object.assign({}, state, {
        hashesPerSecond: action.payload
      });
    case UPDATE_THREADS_NUMBER:
      return Object.assign({}, state, {
        threads: action.payload
      });
    case UPDATE_THROTTLE:
      return Object.assign({}, state, {
        throttle: action.payload
      });
    default:
      return state;
  }
}
