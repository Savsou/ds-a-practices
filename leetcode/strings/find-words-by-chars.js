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

//solution 2
var countCharacters = function (words, chars) {
    let result = 0;
    let charsCount = {}

    for (let char of chars) {
        charsCount[char] = (charsCount[char] || 0) + 1
    }

    for (let word of words) {
        let copyChars = { ...charsCount }
        let wordLength = 0

        for (let letter of word) {
            //if letters in copyChars, then minus the value
            //the value must be > 0, so !== 0
            if (copyChars[letter] && copyChars[letter] !== 0) {
                copyChars[letter] -= 1
                wordLength += 1
            } else {
                wordLength = 0
                break;
            }
        }

        result += wordLength;
    }

    return result;
};
