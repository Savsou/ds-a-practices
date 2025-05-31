//https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const arr1 = [];
    const arr2 = [];
    const uniqueChars = [...new Set(word1)];
    // console.log("unique: ", uniqueChars)

    for (let i = 0; i < uniqueChars.length; i++) {
        arr1.push([...word1].filter(letter => letter === uniqueChars[i])?.length);
        // console.log("arr1: ", arr1)
        arr2.push([...word2].filter(letter => letter === uniqueChars[i])?.length);
    }

    // console.log("arr2: ", arr2)
    if (arr2.includes(0)) return false;

    return arr1.sort().join('') == arr2.sort().join('');
};
