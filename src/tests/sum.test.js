const sum = require('../js/homeworks/first_task.js');

test('sum', () => {
  expect(sum(1)(2)).toEqual(3);
});
