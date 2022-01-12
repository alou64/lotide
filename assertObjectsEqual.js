const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  if (obj1Keys.length !== Object.keys(obj2).length) return false;
  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertation Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};
