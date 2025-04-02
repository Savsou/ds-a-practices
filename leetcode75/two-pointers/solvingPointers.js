//https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
var moveZeroes = function (nums) {
    let leftPointer = 0;

    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] !== 0) {
            [nums[rightPointer], nums[leftPointer]] = [nums[leftPointer], nums[rightPointer]];
            leftPointer++
        }
    }

    return nums
};
