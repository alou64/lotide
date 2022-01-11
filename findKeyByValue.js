const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (let item in obj) {
    if (obj[item] === val) return item;
  }
  return undefined;
};
