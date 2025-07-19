//https://leetcode.com/problems/palindrome-number/description/
var isPalindrome = function (x) {
    let str = x.toString()

    let copy = []

    for (let i = str.length - 1; i >= 0; i--) {
        copy.push(str[i])
    }

    let result = copy.join('')

    return result == str
};
