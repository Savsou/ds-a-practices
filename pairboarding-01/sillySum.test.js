const { sillySum } = require("./javascript-solving");

test('sillySum with 1122', () => {
    expect(sillySum("1122")).toBe(3);
});

test('sillySum with 91212129', () => {
    expect(sillySum("91212129")).toBe(9);
});
