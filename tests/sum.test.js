const sum = require('./sum');

test('Тест функции суммы: 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});