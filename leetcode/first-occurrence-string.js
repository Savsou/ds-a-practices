//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
        return -1
    }

    //first occurrence, check a section of the string
    //length is shorten do to checking a section with the needle's length
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1
};
