const assertArraysEqual = (arr1, arr2) => {
  const tmsg = `✅✅✅ Assertation Passed: ${arr1} === ${arr2}`;
  const fmsg = `🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`;

  if (arr1.length !== arr2.length) {
    console.log(fmsg);
    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) console.log(fmsg);
    return;
  }

  console.log(tmsg);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const middle = arr => {
  const len = arr.length;

  if (len < 3) return [];

  if (len % 2 !== 0) {
    return [arr[Math.floor(len / 2)]];
  } else {
    return arr.slice((len / 2) - 1, (len / 2) + 1);
  }
}
