const { mergeAlternately } = require('./solving-leetcode');

test('mergeAlternately with abc and pqr', () => {
    let word1 = "abc";
    let word2 = "pqr"
    expect(mergeAlternately(word1, word2)).toBe("apbqcr");
})


test('mergeAlternately with ab and pqrs', () => {
    let word1 = "ab";
    let word2 = "pqrs"
    expect(mergeAlternately(word1, word2)).toBe("apbqrs");
})


test('mergeAlternately with abcd and pq', () => {
    let word1 = "abcd";
    let word2 = "pq"
    expect(mergeAlternately(word1, word2)).toBe("apbqcd");
})
