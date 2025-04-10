//https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

var findDifference = function (nums1, nums2) {
    let n1 = []
    let n2 = []
    const result = [n1, n2]

    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    for (let num of set1) {
        if (!set2.has(num)) {
            n1.push(num)
        }
    }

    for (let num of set2) {
        if (!set1.has(num)) {
            n2.push(num)
        }
    }

    return result;
};
