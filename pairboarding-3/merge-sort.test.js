const { merge_sort } = require('./js-solving')

test('merge_sort with unsorted array', () => {
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    expect(merge_sort(array)).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

test('merge_sort with already sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(merge_sort(array)).toEqual([1, 2, 3, 4, 5]);
});

test('merge_sort with reverse sorted array', () => {
    const array = [5, 4, 3, 2, 1];
    expect(merge_sort(array)).toEqual([1, 2, 3, 4, 5]);
});

test('merge_sort with array of one element', () => {
    const array = [42];
    expect(merge_sort(array)).toEqual([42]);
});

test('merge_sort with empty array', () => {
    const array = [];
    expect(merge_sort(array)).toEqual([]);
});
