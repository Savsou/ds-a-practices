const { romanToInt } = require('./roman-to-integer');

test('Roman to integer for III', () => {
    expect(romanToInt("III")).toBe(3)
})

test("Roman to integer for LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58)
})

test('Roman to integer for MCMXCIV', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994)
})
