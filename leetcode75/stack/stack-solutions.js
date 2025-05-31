//https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75

var removeStars = function (s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            result.pop()
        } else {
            result.push(s[i])
        }
    }

    return result.join('');
};
