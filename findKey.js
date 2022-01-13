const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// scan the object and return the first key for which the callback returns a truthy value
const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }
};

const months = {
  'jan': 1,
  'feb': 2,
  'mar': 3
};

assertEqual(findKey(months, x => x === 3), 'mar');
assertEqual(findKey(months, x=> typeof x === 'number'), 'jan');
