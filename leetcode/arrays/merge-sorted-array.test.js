const { merge } = require('./merge-sorted-array');

test('nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3', () => {
    let nums1 = [1, 2, 3, 0, 0, 0]
    let m = 3
    let nums2 = [2, 5, 6]
    let n = 3

    //since manipulating nums1
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
})

test('nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    let nums1 = [1]
    let m = 1
    let nums2 = []
    let n = 0

    //since manipulating nums1
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1]);
})

test('nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
    let nums1 = [0]
    let m = 0
    let nums2 = [1]
    let n = 1

    //since manipulating nums1
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1]);
})
