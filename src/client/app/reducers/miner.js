import {
  HASH_ACCEPTED
} from '../actions/miner';

const initialState = {
  hashesAccepted: 0
};

export default function MinerReducer(state=initialState, action) {
  switch(action.type) {
    case HASH_ACCEPTED:
    return Object.assign({}, state, {
      hashesAccepted: action.payload
    });
    default:
      return state;
  }
}
