//https://leetcode.com/problems/happy-number/description/

// var isHappy = function (n) {

//     if (n == 1 || n == 7) {
//         return true
//     }

//     if (n < 10 && n > 1) {
//         return false
//     }

//     let num = n.toString().split("")
//     let result = 0
//     for (let i = 0; i < num.length; i++) {
//         result = result + parseInt(num[i]) ** 2
//     }

//     return isHappy(result)
// };

function isHappy(n) {
    let seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;

        seen.add(n);

        let sum = 0;
        while (n > 0) {
            let digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10);
        }
        n = sum;
    }

    return true;
}

module.exports = { isHappy }
