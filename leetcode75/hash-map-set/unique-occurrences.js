//https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
var uniqueOccurrences = function (arr) {
    let unique = {};

    for (let char of arr) {
        unique[char] = (unique[char] || 0) + 1;
    }

    let occurrences = new Set();
    for (let val in unique) {
        if (!occurrences.has(unique[val])) {
            occurrences.add(unique[val])
        } else {
            return false
        }
    }

    return true
};
