const { isHappy } = require("./happy-numbers");

test("n = 19 should be true", () => {
    let n = 19
    expect(isHappy(n)).toBe(true)
})

test("n = 7 should be true", () => {
    let n = 7
    expect(isHappy(n)).toBe(true)
})

test("n = 2 should be false", () => {
    let n = 2
    expect(isHappy(n)).toBe(false)
})
