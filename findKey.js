// scan the object and return the first key for which the callback returns a truthy value
const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }
};

module.exports = findKey;
