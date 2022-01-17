// return a slice of the array with elements taken fro the beginning
// keep collecting items from a provided array until the callback provided returns a truthy value
const takeUntil = (arr, callback) => {
  return arr.slice(0, arr.findIndex(callback));
};

module.exports = takeUntil;
