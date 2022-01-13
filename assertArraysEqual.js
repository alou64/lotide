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
