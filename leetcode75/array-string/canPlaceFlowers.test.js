const { canPlaceFlowers } = require('./solving-leetcode');

test('flowerbed of [1,0,0,0,1] and n=1', () => {
    let flowerbed = [1, 0, 0, 0, 1];
    let n = 1
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
})

test('flowerbed of [1,0,0,0,1] and n=2', () => {
    let flowerbed = [1, 0, 0, 0, 1];
    let n = 2
    expect(canPlaceFlowers(flowerbed, n)).toBe(false);
})
