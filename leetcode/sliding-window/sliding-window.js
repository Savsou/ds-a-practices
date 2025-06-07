//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
var lengthOfLongestSubstring = function (s) {
    let chars = new Set();
    let left = 0;
    let maxCount = 0;

    for (let right = 0; right < s.length; right++) {
        while (chars.has(s[right])) {
            chars.delete(s[left])
            left++
        }

        chars.add(s[right]);
        maxCount = Math.max(maxCount, right - left + 1)
    }

    return maxCount
};
