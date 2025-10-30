//https://leetcode.com/problems/palindrome-number/description/
var isPalindrome = function (x) {
    //-121 is not a palindrome, as it will be 121-
    //since that is possible, start with making the number as a string
    let str = x.toString()

    //we are going to loop through the string backwards and have it stored in an array to compare it with the original string/integer
    let copy = []

    for (let i = str.length - 1; i >= 0; i--) {
        copy.push(str[i])
    }

    //join the array together and then compare
    let result = copy.join('')

    return result == str
};
