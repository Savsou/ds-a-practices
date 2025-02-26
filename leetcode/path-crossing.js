//https://leetcode.com/problems/path-crossing/description/
var isPathCrossing = function (path) {
    let moves = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    };

    //only check if we visited the point before
    let visited = new Set();
    visited.add("0,0");

    //origin
    let x = 0;
    let y = 0;

    for (let direction of path) {
        let curr = moves[direction];
        let dx = curr[0];
        let dy = curr[1];

        x += dx;
        y += dy;

        let point = `${x},${y}`;

        if (visited.has(point)) {
            return true;
        }
        visited.add(point);
    }

    return false;
};
