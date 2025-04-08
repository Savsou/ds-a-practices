//https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

var countCharacters = function (words, chars) {
    const charsCount = {}
    let result = 0

    for (let char of chars) {
        charsCount[char] = (charsCount[char] || 0) + 1
    }

    for (const word of words) {
        let copy = { ...charsCount }

        for (let letter of word) {
            if (letter in copy && copy[letter] !== 0) {
                copy[letter] -= 1
            } else {
                result -= word.length
                break
            }
        }

        result += word.length;
    }

    return result;
};
