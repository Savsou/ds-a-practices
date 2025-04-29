//https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75
var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let res = guess(mid);
        if (res === 0) return mid;
        else if (res === -1) right = mid - 1
        else left = mid + 1
    }
};
