// https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows) {
    let result = []

    for (let i = 0; i < numRows; i++) {
        //fill the length of the array with 1's
        let row = new Array(i + 1).fill(1)

        //n
        for (let j = 0; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
}
