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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let arr = [1, 2, 3];
assertArraysEqual(map(arr, num => num + 1), [2, 3, 4]);
assertArraysEqual(map(arr, num => num * 3), [3, 6, 9]);
assertArraysEqual(map(arr, num => num.toString()), ['1', '2', '3']);
