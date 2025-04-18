//https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75

var largestAltitude = function (gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;

    for (let value of gain) {
        currentAltitude += value;
        highestAltitude = Math.max(highestAltitude, currentAltitude);
    }

    return highestAltitude
};

//https://leetcode.com/problems/find-pivot-index/submissions/1610692705/?envType=study-plan-v2&envId=leetcode-75

var pivotIndex = function (nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0)
    let leftSum = 0;

    for (let pivot = 0; pivot < nums.length; pivot++) {
        let rightSum = totalSum - leftSum - nums[pivot];
        if (leftSum == rightSum) {
            return pivot
        }

        leftSum += nums[pivot]
    }

    return -1
};
