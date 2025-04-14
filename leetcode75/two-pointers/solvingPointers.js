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

//https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length
};

//https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75
var maxArea = function (height) {
    let maxArea = 0;
    let leftMax = 0;
    let rightMax = height.length - 1;

    while (leftMax < rightMax) {
        currentArea = (rightMax - leftMax) * Math.min(height[leftMax], height[rightMax])
        maxArea = Math.max(maxArea, currentArea);

        if (height[leftMax] < height[rightMax]) {
            leftMax++
        } else {
            rightMax--;
        }
    }

    return maxArea
};
