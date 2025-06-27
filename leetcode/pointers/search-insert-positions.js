//https://leetcode.com/problems/search-insert-position/description/
var searchInsert = function (nums, target) {
    let leftPointer = 0;
    let right = nums.length - 1;

    while (leftPointer <= right) {
        let mid = Math.floor((leftPointer + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            leftPointer = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return leftPointer;
};
