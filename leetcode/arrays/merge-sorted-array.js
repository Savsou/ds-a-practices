//https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
    let lastNum1 = m - 1
    let lastNum2 = n - 1
    let fullLength = m + n - 1

    //replace existing array with highest number at given time
    while (lastNum2 >= 0) {
        //check for if lastNum1 goes below 0
        //if nums1 has the biggest number then replace, else num2 replace
        if (lastNum1 >= 0 && (nums1[lastNum1] > nums2[lastNum2])) {
            nums1[fullLength] = nums1[lastNum1]
            lastNum1 -= 1
        } else {
            nums1[fullLength] = nums2[lastNum2]
            lastNum2 -= 1
        }

        fullLength -= 1
    }
};

module.exports = { merge }
