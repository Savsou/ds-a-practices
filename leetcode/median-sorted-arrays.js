//https://leetcode.com/problems/median-of-two-sorted-arrays/description/
var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArr = []
    let nums1Pointer = 0;
    let nums2Pointer = 0;

    while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
        if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            mergedArr.push(nums1[nums1Pointer])
            nums1Pointer++
        } else {
            mergedArr.push(nums2[nums2Pointer])
            nums2Pointer++
        }
    }

    while (nums1Pointer < nums1.length) {
        mergedArr.push(nums1[nums1Pointer])
        nums1Pointer++
    }

    while (nums2Pointer < nums2.length) {
        mergedArr.push(nums2[nums2Pointer])
        nums2Pointer++
    }

    let mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        return (mergedArr[mid - 1] + mergedArr[mid]) / 2
    } else {
        return mergedArr[mid]
    }
};
