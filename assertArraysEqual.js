const assertArraysEqual = (arr1, arr2) => {
  const tmsg = `✅✅✅ Assertation Passed: ${arr1} === ${arr2}`;
  const fmsg = `🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`;

  if (arr1.length !== arr2.length) console.log(fmsg);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) console.log(fmsg);
    return;
  }
  return console.log(tmsg);
};

assertArraysEqual([1,2,3], [1,2,3,4]);
