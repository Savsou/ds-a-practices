const { intersection } = require('./js-solving')

test('intersect two array, common elements between [2, 2, 4, 1] and [1, 2, 0, 2]', () => {
    let array1 = [2, 2, 4, 1];
    let array2 = [1, 2, 0, 2];

    const result = intersection(array1, array2);
    expect(result).toEqual(expect.arrayContaining([2, 1]));
    expect(result.length).toBe(2);
})
