//https://leetcode.com/problems/counting-bits/?envType=study-plan-v2&envId=leetcode-75

var countBits = function (n) {
    const ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};
