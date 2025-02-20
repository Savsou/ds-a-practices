//support function
function merge(leftArray, rightArray) {
    let result = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift())
        } else {
            result.push(rightArray.shift())
        }
    }

    return [...result, ...leftArray, ...rightArray]
}

function merge_sort(array) {
    if (array.length <= 1) {
        return array.slice()
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    const sortedLeftHalf = merge_sort(leftHalf);
    const sortedRightHalf = merge_sort(rightHalf);

    return merge(sortedLeftHalf, sortedRightHalf);
}

//https://leetcode.com/problems/coin-change/description/
function make_change(amount, coins) {

}

//https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (prefix != strs[i].slice(0, prefix.length)) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
        if (prefix === "") return "";
    }

    return prefix;
};

module.exports = { merge_sort, longestCommonPrefix }
