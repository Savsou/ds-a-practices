// https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75

var reverseList = function (head) {
    let prev = null;
    let current = head
    let next;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
};

// https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function (head) {
    let seen = new Set();

    let temp = head;

    while (temp) {
        if (seen.has(temp)) return true;

        seen.add(temp)

        temp = temp.next;
    }

    return false;
};
