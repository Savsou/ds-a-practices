const { maxOfThree } = require("./js-solving")

test('maxOfThree with 10, 3, 5, 6, 20', () => {
    expect(maxOfThree([10, 3, 5, 6, 20])).toBe(1200);
})
