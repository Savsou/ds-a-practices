//https://leetcode.com/problems/reverse-integer/description/
var reverse = function (x) {
    let result = 0;

    if (x < 0) {
        result = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        result = parseInt(String(x).split('').reverse().join(''));
    }

    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return 0
    }

    return result;
};
