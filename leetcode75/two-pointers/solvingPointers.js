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


//https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let operations = 0;

    while (left < right) {
        let currentSum = nums[left] + nums[right];

        if (currentSum === k) {
            operations += 1;
            left += 1;
            right -= 1;
        } else if (currentSum < k) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return operations
};
