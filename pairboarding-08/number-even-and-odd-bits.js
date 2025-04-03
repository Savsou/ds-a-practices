//https://leetcode.com/problems/number-of-even-and-odd-bits/

var evenOddBit = function (n) {
    //value of 1 appears on even
    //value of 1 appears on odd
    //becomes [even, odd]

    let binaryNum = n.toString(2).split("").reverse()
    let even = 0;
    let odd = 0;

    for (let i = 0; i < binaryNum.length; i++) {
        if ((binaryNum[i] == 1) && (i % 2 == 0)) {
            even++
        }
        if ((binaryNum[i] == 1) && (i % 2 != 0)) {
            odd++
        }
    }

    return [even, odd]
};
