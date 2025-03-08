const { productExceptSelf } = require("./solving-leetcode")

test('nums = [1, 2, 3, 4] should equal [24, 12, 8, 6]', () => {
    const nums = [1, 2, 3, 4];
    expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6])
})

test('nums = [-1, 1, 0, -3, 3] should equal [0, 0, 9, 0, 0]', () => {
    const nums = [-1, 1, 0, -3, 3];
    const result = productExceptSelf(nums).map(n => Object.is(n, -0) ? 0 : n);
    expect(result).toEqual([0, 0, 9, 0, 0])
})
