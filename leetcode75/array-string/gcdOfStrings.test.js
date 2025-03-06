const { gcdOfStrings } = require('./solving-leetcode');

test('gcdOfStrings with ABCABC and ABC', () => {
    let str1 = "ABCABC";
    let str2 = "ABC";
    expect(gcdOfStrings(str1, str2)).toBe("ABC")
})


test('gcdOfStrings with ABABAB and ABAB', () => {
    let str1 = "ABABAB";
    let str2 = "ABAB";
    expect(gcdOfStrings(str1, str2)).toBe("AB")
})


test('gcdOfStrings with LEET and CODE', () => {
    let str1 = "LEET";
    let str2 = "CODE";
    expect(gcdOfStrings(str1, str2)).toBe("")
})
