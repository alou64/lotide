const letterPositions = str => {
  let ans = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
      let ch = str[i].toLowerCase();
      if (!ans[ch]) {
        ans[ch] = [i];
      } else {
        ans[ch].push(i);
      }
    }
  }
  return ans;
};

module.exports = letterPositions;
