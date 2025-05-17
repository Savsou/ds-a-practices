//https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=leetcode-75

var tribonacci = function (n) {
    let memo = [0, 1, 1];

    if (memo[n] === undefined) {
        memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
    }

    return memo[n]

};
