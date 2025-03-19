## Behavioral

* Describe a situation in which you met a major obstacle in order to complete a project. How did you deal with it? What steps did you take?
* Tell me about a time you had to work on several projects at once. How did you handle this?
* Give an example of a time when you didn’t agree with other programmer. Did you stand up for something that you believed was right?

## Question 1
### Reverse a Linked List

You are given the pointer to the head node of a linked list. Your goal is to reverse this list. A linked list is implemented using just a `Node` class, which you will be given. The `Node` class is defined as:

```js
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
```

Your function should take in just the **head node**, reverse the list, and return the _new_ head node (which would be the _old_ tail node). Remember that an empty linked list is still a valid linked list. If `null` is passed into your function, your function should return `null`.

Note that this class does not have a `previous` attribute. Make sure your partner is using a Node object similar to the one above!

**Constraints:**

* Your function must run in `O(n)` time and `O(1)` space

### Solution

**Overview:** All we want to do here is flip the `next` attribute on each node until we've gotten to the end. We could do this iteratively with a `while` loop.

```js
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function reverse(head) {
  let prev = null;
  let current = head;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
```

## Question 2
### Cycle Detective

A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided for you in your editor. It has one parameter: a pointer to a Node object named `head` that points to the head of a linked list. Your function must return a boolean denoting whether or not there is a cycle in the list. If there is a cycle, return true; otherwise, return false.

**Example:**
```js
const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

/* This creates the following list:
   1->2->3->null
*/

detectCycle(node1) // Output: False

const cycleNode3 = new Node(3, null);
const cycleNode2 = new Node(2, cycleNode3);
const cycleNode1 = new Node(1, cycleNode2);

// reassign `next` attribute to create cycle
cycleNode3.next = cycleNode2;

/* Our list now looks like this:
   1->2->3->2->3->2 ... etc.
*/
hasCycle(node1) // Output: true
```

### Solution 1 - Use Hashing

```js
function hasCycle(head) {
  const seen = {};

  let temp = head;

  while (temp) {
    if (seen[temp]) return true;

    seen[temp] = true;

    temp = temp.next;
  }

  return false;
}
```


Can you do this in O(1) space?

### Solution 2 (Improved)

This is the fastest method. Traverse linked list using two pointers.  Move one pointer by one and other pointer by two.  If these pointers meet at some node then there is a loop.  If pointers do not meet then linked list doesn’t have loop.

```js
function hasCycle(head) {
    let hasCycle = false;

    if (!head)
      hasCycle = false;

    let slow = head;
    let fast = head;

    while (slow && fast) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast == slow) {
            hasCycle = true;
            break;
        }
    }

    return hasCycle;
}
```

## Behavioral

* Tell me about a time when you had a disagreement with other programmer. How did you handle the situation? Were you able to reach a mutually beneficial resolution to that conflict? If not, why were you and your co-worker unable to reach a mutually beneficial resolution? If you knew then what you know now, what would you have done differently to either prevent the conflict, or to resolve it?

* What is a new technology you are especially excited about?

* Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?

# Question 1
## Second Largest Node

Write an algorithm that, given a Binary Search Tree, will find the second largest node in the tree. Assume you already have a bst `Node` class with an insert method.

**Example:**
```
        _10_
      _/    \_
     5        15
    / \       / \
   3   8     12  20
  /     \         \
 2       4        30

Output: 20


     10
    /
   5
  / \
 3   7

Output: 7
```

# Solution

If there is no right node, the second largest is the right most left subtree:
```
   10
   /
  5
 / \
3   7
```

If there is a right node and the right node has children, recurse to that right child:
```
        _10_
      _/    \_
     5        15
    / \       / \
   3   8     12  20
  /     \         \
 2       4        30
```
Eventually we'll get to the following scenario:
```
 20
  \
   30
```
If the right node has no children, the second largest is the current node.

Complexity:

Time: O(h)
Space: O(h), where h is the height of the tree


```js
function findSecondLargest(head) {
  if (head.right) {
    if (head.right.left || head.right.right)
      return findSecondLargest(head.right)
    else
      return head;
  } else {
    return findRightMostNode(head.left);
  }
}

function findRightMostNode(node) {
  if (node.right) {
    return findRightMostNode(node.right);
  } else {
    return node;
  }
}
```


# Question 2
## Backwards Addition

Write a method that adds two numbers where the digits are store inside of a linked list in reverse order. The return value should also be a linked list in reverse order.

**Example:**

```
Input 1: 6->5->null
Input 2: 9->8->7
Result: 5->4->8

56 + 789 = 548
```

## Solution

We could solve this with an iterative or a recursive algorithm, both are well suited for this exercise. We'll use a recursive algorithm for practice with recursion. Note this takes an extra space of O(m) where m is the recursion depth.

Base case:
* If first and second lists are null AND carry is zero
  * Return null

Recursive case:
* Set value to carry
* Add both nodes' data to value
* Set the carry to 1 if value >= 10, else 0
* Set the remainder to value % 10
* Create a node with the remainder
* Set node.next to a recursive call on the next nodes, passing in the carry
* Return node

Complexity:

Time: O(n)
Space: O(m), extra space for result and recursion depth

**Notes**:

* Careful with adding if the lists differ
  * Only add if a node is not None
  * Alternatively, we could add trailing zeroes to the smaller list

```ruby
class Node
  attr_reader :data
  attr_accessor :next

  def initialize(data, next = nil)
    @data = data
    @next = next
  end
end

def add_reverse(first_node, second_node, carry)
  if first_node.nil? && second_node.nil? && carry.zero?
    return nil
  end

  value = carry
  value += first_node.nil? 0 : first_node.data
  value += second_node.nil? 0 : second_node.data

  carry = value >= 10 ? 1 : 0

  value %= 10
  node = Node.new(value)
  node.next = add_reverse(first_node&.next, second_node&.next, carry)

  return node
end
```
