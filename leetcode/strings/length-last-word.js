//https://leetcode.com/problems/length-of-last-word/description/
var lengthOfLastWord = function (s) {
    let words = s.trim().split(" ")

    return words[words.length - 1].length
};
