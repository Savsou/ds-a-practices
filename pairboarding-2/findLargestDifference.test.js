const { findLargestDifference } = require('./js-solving');

test('find largest difference in the array [1, 6, 5, 2, 9, -2]', () => {
    let array = [1, 6, 5, 2, 9, -2];
    expect(findLargestDifference(array)).toBe(8);
})
