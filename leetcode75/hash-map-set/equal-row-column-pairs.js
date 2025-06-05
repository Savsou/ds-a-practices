//https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
var equalPairs = function (grid) {
    let pairs = 0;
    const rows = new Map();

    for (let i = 0; i < grid.length; i++) {
        const row = JSON.stringify(grid[i])
        rows.set(row, 1 + (rows.get(row) || 0));
    }

    for (let j = 0; j < grid.length; j++) {
        const col = JSON.stringify(grid.map(row => row[j]))
        pairs += (rows.get(col) || 0)
    }

    return pairs;
};
