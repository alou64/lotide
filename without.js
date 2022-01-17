const without = (source, itemsToRemove) => {
  let ans = [];
  for (let val of source) {
    if (!itemsToRemove.includes(val)) ans.push(val);
  }
  return ans;
};

module.exports = without;
