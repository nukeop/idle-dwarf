export const HASH_ACCEPTED = 'HASH_ACCEPTED';
export const START_MINING = 'START_MINING';
export const STOP_MINING = 'STOP_MINING';
export const UPDATE_HASHES_PER_SECOND = 'UPDATE_HASHES_PER_SECOND';
export const UPDATE_THREADS_NUMBER = 'UPDATE_THREADS_NUMBER';
export const UPDATE_THROTTLE = 'UPDATE_THROTTLE';

export function hashAccepted(n) {
  if (localStorage.totalHashes) {
    localStorage.setItem('totalHashes', parseInt(localStorage.totalHashes) + 256);
  } else {
    localStorage.setItem('totalHashes', 256);
  }

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

export function updateThreadsNumber(n) {
  return {
    type: UPDATE_THREADS_NUMBER,
    payload: n
  };
}

export function updateThrottle(f) {
  return {
    type: UPDATE_THROTTLE,
    payload: f
  };
}
