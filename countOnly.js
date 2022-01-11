const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// return an object containing counts of everything the in the array that the input object listed
const countOnly = (arr, obj) => {
  let ans = {};
  for (let val of arr) {
    if (obj[val]) {
      if (!ans[val]) {
        ans[val] = 1;
      } else {
        ans[val] += 1;
      }
    }
  }
  return ans;
};
