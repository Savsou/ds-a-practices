const { longestCommonPrefix } = require('./js-solving')

test('["flower", "flow", "flight"] should be "fl"', () => {
    let strs = ["flower", "flow", "flight"]
    expect(longestCommonPrefix(strs)).toBe("fl")
})

test('["dog","racecar","car"] should be an empty string ""', () => {
    let strs = ["dog", "racecar", "car"]
    expect(longestCommonPrefix(strs)).toBe("")
})
