//https://leetcode.com/problems/single-number/?envType=study-plan-v2&envId=leetcode-75
var singleNumber = function (nums) {
    let uniqueNum = 0;

    for (let i = 0; i < nums.length; i++) {
        // console.log(uniqueNum)
        uniqueNum = uniqueNum ^ nums[i]
        // console.log("after", uniqueNum)
    }

    return uniqueNum;
};
