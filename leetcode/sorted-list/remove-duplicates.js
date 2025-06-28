//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
var deleteDuplicates = function (head) {
    let result = head;

    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }

    return result;
};
