/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function binSerch (array, value, left, right) {
  const mid = Math.floor((right - left) / 2 + left);
  if (array[mid] === value) return mid;
  if (array[mid] < value) return binSerch(array, value, mid + 1, right);
  return binSerch(array, value, left, mid);
}

function findIndex(array, value) {
  // throw new Error('Not implemented');
  /*
  let mid = array[array.length/2];
  const mid = Math.floor(array.length / 2);
  if (array[mid] === value) return mid;
  if (array[mid] < value) return findIndex(array.slice(mid + 1), value) + mid + 1;
  return findIndex(array.slice(0, mid), value);
  */
  return binSerch(array, value, 0, array.length - 1);
}

module.exports = findIndex;
