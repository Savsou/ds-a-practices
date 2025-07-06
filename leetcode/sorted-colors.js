//https://leetcode.com/problems/sort-colors/solutions/6843641/video-2-solutions-with-frequency-or-3-pointers/
var sortColors = function (nums) {
    let count = { 0: 0, 1: 0, 2: 0 };

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }

    let index = 0;
    for (let color = 0; color < 3; color++) {
        let freq = count[color];
        for (let j = 0; j < freq; j++) {
            nums[index] = color;
            index++;
        }
    }
};
