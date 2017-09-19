export function addOrCreate(key, value) {
  if (localStorage[key]) {
    localStorage.setItem(key, parseInt(localStorage[key]) + value);
  } else {
    localStorage.setItem(key, value);
  }
}
