const soma = require('../soma');
const soma2 = require('../soma2');

test('soma 1 + 2 e igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
})

test('soma 1 + 2 e igual a 3', () => {
    expect(soma2(1, 2)).toBe(8);
})