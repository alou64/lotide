const middle = arr => {
  const len = arr.length;

  if (len < 3) return [];

  if (len % 2 !== 0) {
    return [arr[Math.floor(len / 2)]];
  } else {
    return arr.slice((len / 2) - 1, (len / 2) + 1);
  }
};

module.exports = middle;
