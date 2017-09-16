export const HASH_ACCEPTED = 'HASH_ACCEPTED';

export function hashAccepted(n) {
  return {
    type: HASH_ACCEPTED,
    payload: n
  };
}
