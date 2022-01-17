const eqObjects = require('./eqObjects');

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertation Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

module.exports = assertObjectsEqual;
