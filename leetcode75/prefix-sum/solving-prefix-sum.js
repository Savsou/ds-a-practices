//https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75

var largestAltitude = function (gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;

    for (let value of gain) {
        currentAltitude += value;
        highestAltitude = Math.max(highestAltitude, currentAltitude);
    }

    return highestAltitude
};
