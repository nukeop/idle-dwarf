export const HASH_ACCEPTED = 'HASH_ACCEPTED';
export const START_MINING = 'START_MINING';
export const STOP_MINING = 'STOP_MINING';
export const UPDATE_HASHES_PER_SECOND = 'UPDATE_HASHES_PER_SECOND';

export function hashAccepted(n) {
  return {
    type: HASH_ACCEPTED,
    payload: n
  };
}

export function startMining() {
  return {
    type: START_MINING,
    payload: null
  };
}

export function stopMining() {
  return {
    type: STOP_MINING,
    payload: null
  };
}

export function updateHashesPerSecond(n) {
  return {
    type: UPDATE_HASHES_PER_SECOND,
    payload: n
  };
}
