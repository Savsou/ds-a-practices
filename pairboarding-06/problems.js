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

//need a tree node class to test these. Unable to find the questions in leetcode
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        const newNode = new TreeNode(val);

        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                return this.insert(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                return this.insert(val, currentNode.right);
            }
        }

        return newNode;
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(12);
bst.insert(20);
bst.insert(30);

//solution here
function findSecondLargest(head) {
    if (head.right) {
        if (head.right.left || head.right.right) {
            return findSecondLargest(head.right)
        } else {
            return head;
        }
    } else {
        return findRightMostNode(head.left);
    }
}

function findRightMostNode(node) {
    if (node.right) {
        return findRightMostNode(node.right)
    } else {
        return node;
    };
}

console.log(findSecondLargest(bst.root).value); // Should return 20


//question 2 backwardds addition
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function addReverse(first_node, second_node, carry = 0) {
    if (!first_node && !second_node && carry === 0) {
        return null;
    }

    let sum = carry;
    sum += first_node ? first_node.value : 0;
    sum += second_node ? second_node.value : 0;

    let newCarry = Math.floor(sum / 10);

    sum %= 10
    let newNode = new ListNode(sum)
    newNode.next = addReverse(first_node ? first_node.next : null, second_node ? second_node.next : null, newCarry);

    return newNode
}

//test, will create the linked list
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

//test, will print out the result of 5->4->8 as shown in example
//not doing the action of reversing since addReverse is doing that
//just pushing the values into the array and join them with -> between them
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join("->"));
}

let l1 = createLinkedList([6, 5]);    // Represents 56 (reversed)
let l2 = createLinkedList([9, 8, 7]); // Represents 789 (reversed)

let result = addReverse(l1, l2);
printLinkedList(result); // Output: 5->4->8 (Represents 548)
