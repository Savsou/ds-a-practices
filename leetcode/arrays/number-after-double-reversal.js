//https://leetcode.com/problems/a-number-after-a-double-reversal/description/
var isSameAfterReversals = function (num) {
    let reversedNum = num.toString().split('').reverse().join('')
    reversedNum = Math.floor(reversedNum)
    reversedNum = reversedNum.toString().split('').reverse().join('')
    return reversedNum == num
};
