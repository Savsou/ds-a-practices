//https://leetcode.com/problems/shuffle-string/description/
var restoreString = function (s, indices) {
    let index = 0;
    let result = [];

    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
    }

    return result.join('')
};
