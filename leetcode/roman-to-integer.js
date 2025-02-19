//https://leetcode.com/problems/roman-to-integer/description/

var romanToInt = function (s) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let romanInt = 0;

    for (let i = 0; i < s.length; i++) {
        let currNum = roman[s[i]]
        let nextNum = roman[s[i + 1]] || 0
        if (currNum >= nextNum) {
            romanInt += currNum
        } else {
            romanInt -= currNum;
        }
    }

    return romanInt
};

// s = "XIV"
// console.log(romanToInt(s))

module.exports = { romanToInt }
