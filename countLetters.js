const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = str => {
  let ans = {};
  for (let ch of str) {
    if (ch.toLowerCase() !== ch.toUpperCase()) {
      ch = ch.toLowerCase();
      if (!ans[ch]) {
        ans[ch] = 1;
      } else {
        ans[ch] += 1;
      }
    }
  }
  return ans;
};
