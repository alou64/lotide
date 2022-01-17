// scan the object and return the first key for which the callback returns a truthy value
const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }
};

module.exports = findKey;

// const months = {
//   'jan': 1,
//   'feb': 2,
//   'mar': 3
// };
//
// assertEqual(findKey(months, x => x === 3), 'mar');
// assertEqual(findKey(months, x=> typeof x === 'number'), 'jan');
