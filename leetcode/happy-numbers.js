//https://leetcode.com/problems/happy-number/description/

var isHappy = function (n) {

    if (n == 1 || n == 7) {
        return true
    }

    if (n < 10 && n > 1) {
        return false
    }

    let num = n.toString().split("")
    let result = 0
    for (let i = 0; i < num.length; i++) {
        result = result + parseInt(num[i]) ** 2
    }

    return isHappy(result)
};
