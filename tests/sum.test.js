const sum = require("../main.js");

test('sum', () => {
    expect(sum(1)(2)).toEqual(3);
});
