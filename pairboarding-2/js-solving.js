//Triple Maximum
function maxOfThree(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    let min1 = Infinity
    let min2 = Infinity

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = arr[i]
        } else if (arr[i] > max2) {
            max3 = max2
            max2 = arr[i]
        } else if (arr[i] > max3) {
            max3 = arr[i]
        }

        if (arr[i] < min1) {
            min2 = min1
            min1 = arr[i]
        } else if (arr[i] < min2) {
            min2 = arr[i]
        }
    }

    let product1 = max1 * max2 * max3;
    let product2 = max1 * min1 * min2;
    let max = Math.max(product1, product2)

    return max
}

// arr1 = [10, 3, 5, 6, 20];
// arr2 = [-10, -3, -5, -6, -20];

// console.log(maxOfThree(arr1));



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

module.exports = { maxOfThree, mergeAlternately, gcdOfStrings, kidsWithCandies }
