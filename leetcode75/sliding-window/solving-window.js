//https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

var findMaxAverage = function (nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        max = Math.max(max, sum)
    }

    return max / k;
};

//https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75

var maxVowels = function (s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++
        }
    }

    if (count === k) {
        return count
    }

    maxCount = Math.max(maxCount, count);

    for (let i = k; i <= s.length; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
        if (vowels.has(s[i - k])) {
            count--;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount
};
