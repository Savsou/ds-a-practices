// function mergeAlternatively(word1, word2) {
//     let arr1 = word1.split("");
//     let arr2 = word2.split("");
//     let res = [];

//     while (arr1.length && arr2.length) {
//         let el = arr1.shift();
//         res.push(el);
//         let el2 = arr2.shift();
//         res.push(el2);
//     }

//     if (arr1.length == 0 && arr2.length > 0) {
//         res.push(...arr2)
//     }

//     if (arr2.length == 0 && arr1.length > 0) {
//         res.push(...arr1)
//     }

//     return res.join("");
// }

//Merge Strings Alternately
function mergeAlternately(word1, word2) {
    //Start with a expensive approach
    //use shift (need to convert to an array) function to remove the first letter from each word and push into a new array, might be more time/space expensive

    // let arr1 = word1.split("");
    // let arr2 = word2.split("");
    // let res = [];

    // while (arr1.length && arr2.length) {
    //     let el = arr1.shift();
    //     res.push(el);
    //     let el2 = arr2.shift();
    //     res.push(el2);
    // }

    // if (arr1.length === 0 && arr2.length > 0) {
    //     res.push(...arr2)
    // }

    // if (arr2.length === 0 && arr1.length > 0) {
    //     res.push(...arr1)
    // }

    // return res.join("")
    let res = '';
    let remainder = "";
    let lengthLimit = word1.length;

    if (word1.length < word2.length) {
        remainder = word2.slice(word1.length);
        lengthLimit = word1.length;
    } else if (word1.length > word2.length) {
        remainder = word1.slice(word2.length);
        lengthLimit = word2.length;
    }

    for (let i = 0; i < lengthLimit; i++) {
        res += word1[i] + word2[i]
    }

    res += remainder;
    return res;

};

//Greatest Common Divisor of Strings
function gcdOfStrings(str1, str2) {
    let sliced;
    if (str1 + str2 != str2 + str1) return ""
    if (str1 == str2) return str1
    if (str1.length > str2.length) {
        sliced = str1.slice(str2.length)
        return gcdOfStrings(sliced, str2)
    }
    if (str1.length < str2.length) {
        sliced = str2.slice(str1.length)
        return gcdOfStrings(str1, sliced)
    }
};

//Kids With the Greatest Number of Candies
function kidsWithCandies(candies, extraCandies) {
    let max = Math.max(...candies);
    let res = [];

    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= max) res.push(true);
        else res.push(false);
    }

    return res;
};

function canPlaceFlowers(flowerbed, n) {
    let count = 0

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let prev = (i === 0) ? 0 : flowerbed[i - 1]
            let next = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1]

            if (prev === 0 && next === 0) {
                count++;
                flowerbed[i] = 1
            }
        }
    }

    return count >= n
}

// var reverseVowels = function(s) {
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     let stringVowels = []

//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             stringVowels.push(s[i])
//         }
//     }

//     stringVowels.reverse();

//     let result = "";
//     let vowelIndex = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             result += stringVowels[vowelIndex];
//             vowelIndex++;
//         } else {
//             result += s[i];
//         }
//     }

//     return result;
// };

function reverseVowels(s) {
    const vowels = "aeiouAEIOU"
    let word = s.split("")
    let start = 0
    let end = s.length - 1

    while (start < end) {
        while (start < end && !vowels.includes(word[start])) {
            start++
        }
        while (start < end && !vowels.includes(word[end])) {
            end--
        }

        [word[start], word[end]] = [word[end], word[start]]
        start++
        end--
    }

    return word.join("")
}

var reverseWords = function (s) {
    let words = s.trim().split(/\s+/);
    let reversedWords = []
    let end = words.length - 1
    // console.log(words)

    for (let i = 0; i <= end; i++) {
        reversedWords.push(words[end - i])
    }

    return reversedWords.join(" ")
};

var productExceptSelf = function (nums) {
    let n = nums.length
    let newArray = new Array(n).fill(1)

    //start with before and after the index for o(n) so 2 loops
    //and maybe 3rd loop to combine answers
    let leftRes = 1;
    for (let i = 0; i < n; i++) {
        newArray[i] *= leftRes;
        leftRes *= nums[i]
    }

    let rightRes = 1;
    for (let i = n - 1; i >= 0; i--) {
        newArray[i] *= rightRes;
        rightRes *= nums[i]
    }

    return newArray;
};

//https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

var increasingTriplet = function (nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num
        } else if (num <= second) {
            second = num
        } else {
            return true
        }
    }

    return false
};

module.exports = { mergeAlternately, gcdOfStrings, kidsWithCandies, canPlaceFlowers, reverseVowels, reverseWords, productExceptSelf }
