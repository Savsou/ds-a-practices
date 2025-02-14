const { kidsWithCandies } = require('./js-solving')

test('candies[2, 3, 5, 1, 3] with 3 extra candies', () => {
    let candies = [2, 3, 5, 1, 3];
    let extraCandies = 3;
    expect(kidsWithCandies(candies, extraCandies)).toEqual([true, true, true, false, true])
})
