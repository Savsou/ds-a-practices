const { reverseVowels } = require('./solving-leetcode')

test("Reverse vowels in IceCreAm to be AceCreIm", () => {
    let s = "IceCreAm"
    expect(reverseVowels(s)).toBe("AceCreIm")
})

test("Reverse vowels in leetcode to be leotcede", () => {
    let s = "leetcode"
    expect(reverseVowels(s)).toBe("leotcede")
})
