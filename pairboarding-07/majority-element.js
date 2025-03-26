// https://leetcode.com/problems/majority-element/description/
var majorityElement = function (nums) {
    let counts = {};

    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > Math.floor(nums.length / 2)) {
            return num;
        }
    }

};
