assertEqual = require('../assertEqual');
eqArrays = require('../eqArrays')

assertEqual(true, eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(false, eqArrays([2, 3], [1, 2, 3]));
