const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// let arr = [1, 2, 3];
// assertArraysEqual(map(arr, num => num + 1), [2, 3, 4]);
// assertArraysEqual(map(arr, num => num * 3), [3, 6, 9]);
// assertArraysEqual(map(arr, num => num.toString()), ['1', '2', '3']);
