const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
};


// return a slice of the array with elements taken fro the beginning
// keep collecting items from a provided array until the callback provided returns a truthy value
const takeUntil = (arr, callback) => {
  return arr.slice(0, arr.findIndex(callback));
};

const arr = [1, 2, 3, 4]
assertArraysEqual(takeUntil(arr, num => num > 3), [1, 2, 3]);
assertArraysEqual(takeUntil(arr, num => num === 4), [1, 2, 3]);
assertArraysEqual(takeUntil(arr, num => num < 3), []);
