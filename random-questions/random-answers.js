function findMissingSmallestPositive(arr) {
    if (Math.max(...arr) < 1) {
        return 1
    }

    let numSet = new Set(arr.filter(num => num > 0));
    let min = 1

    while (numSet.has(min)) {
        min += 1;
    }

    return min;
}

// console.log(findMissingSmallestPositive([-1, -3]))
// console.log(findMissingSmallestPositive([1, 3, 6, 4, 1, 2]))

//Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

/* Example

Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

function judgeRobot(string) {
    let x = 0;
    let y = 0;

    for (let i of string) {
        if (i === 'R') {
            x += 1
        } else if (i === 'L') {
            x -= 1
        } else if (i === 'U') {
            y += 1
        } else if (i === 'D') {
            y -= 1
        }
    }

    return x === 0 && y === 0;
}

// console.log(judgeRobot("UD"))
// console.log(judgeRobot("LL"))
