const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const tmsg = `✅✅✅ Assertation Passed: ${arr1} === ${arr2}`;
  const fmsg = `🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`;

  if (arr1.length !== arr2.length) {
    console.log(fmsg);
    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(fmsg);
      return;
    }
  }

  console.log(tmsg);
};

const without = (source, itemsToRemove) => {
  let ans = [];
  for (val of source) {
    if (!itemsToRemove.includes(val)) ans.push(val);
  }
  return ans;
};
