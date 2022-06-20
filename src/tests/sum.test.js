const sum = require('../js/main');

test('sum', () => {
  expect(sum(1)(2)).toEqual(3);
});
