//https://leetcode.com/problems/number-of-recent-calls/submissions/?envType=study-plan-v2&envId=leetcode-75

var RecentCounter = function () {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
