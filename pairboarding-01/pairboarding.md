# Question #1
## Find Missing Number

You are given an **unsorted** array, and are told that this array contains (n - 1) of n consecutive numbers (where the bounds are defined). Write a method, `findMissingNumber`, that finds the missing number in `O(N)` time

**Example:**
```js
// arrayOfIntegers: [2, 5, 1, 4, 9, 6, 3, 7];
// upperBound: 9;
// lowerBound: 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // Output: 8
```

## Solution

```js
function findMissingNumber(array, upperBound, lowerBound) {
  // Iterate through array to find the sum of the numbers
  let sumOfIntegers = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfIntegers += array[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound

  const upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  const lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

  const theoreticalSum = upperLimitSum - lowerLimitSum;

  return theoreticalSum - sumOfIntegers;
}
```

# Question #2
## Magic Index

The `magic index` of an array occurs when the element at that index is the same as the index itself. More simply, the magic index is when `array[i] === i`. Write a **recursive** method, `findMagicIndex`, that takes in an array and returns the `index` that is the magic index. **The method must take `O(logN)` time and `O(logN)` space.**

**Constraints:**
* The array is sorted
* The array may have **multiple magic indices**. If this is the case, return the **leftmost** occurance.
* The elements in the array don't have to be distinct
* The magic index doesn't always exist; return `-1` if it doesn't exist
* The array may have negative values

**Examples:**

```
a[i]  -4, -2, 2, 6, 6, 6, 6, 10
i      0,  1, 2, 3, 4, 5, 6, 7
Result: 2

a[i]  -4 -2  1  6  6  6  6 10
  i    0  1  2  3  4  5  6  7
Result: 6

a[i]  -4 -2  1  6  6  6  7 10
  i    0  1  2  3  4  5  6  7
Result: -1
```

If your partner gets stuck, ask them: What an algorithm can run in `O(logN)` time, what does that generally mean we must be doing?
> The answer we are looking for here is `splitting it in half`

## Solution

```js
function findMagicIndex(array, start, end) {
  if (end < start || start < 0 || end >= array.length)
    return -1;

  const mid = Math.floor((start + end) / 2);

  if (mid === array[mid])
    return mid;

  const leftEnd = Math.min(mid - 1, array[mid]);
  const leftResult = findMagicIndex(array, start, leftEnd);

  if (leftResult !== -1)
    return leftResult;

  const rightStart = Math.max(mid + 1, array[mid]);
  const rightResult = findMagicIndex(array, rightStart, end);

  if (rightResult !== -1)
    return rightResult;

  return -1;
}
```

**Explanation:**

We'll use a binary search to split the search space in half on each iteration. To obtain more efficiency, we can do a little better than a naive left and half split.

In the example below, we see that `i == 5` cannot be the magic index, otherwise a[5] would have to equal 5 (note a[4] == 6).

```
a[i]  -4 -2  2  6  6  6  6 10
  i    0  1  1  3  4  5  6  7
                  mid
```

Similarly, in the example below we can further trim the left search space.

```
a[i]  -4 -2  2  2  2  6  6 10
  i    0  1  2  3  4  5  6  7
                  mid
```
Steps:
* Calculate mid
* If mid == array[mid], return mid
* Recurse on the left side of the array
  * start: 0
  * end: min(mid-1, array[mid]
* Recurse on the right side of the array
  * start: max(mid+1, array[mid]
  * end: end

**Complexity:**
Time: O(log(n))
Space: O(log(n))


# Question #3
## Silly Sum

Write a method, `sillySum`, that takes in a sequence of digits as a string and returns the sum of all digits that match the **_next_** digit in the list. The list is "circular", so the digit after the last digit is the *first* digit in the list.

**Examples:**

- `1122` produces a sum of `3` (`1` + `2`) because the first digit (`1`) matches the second digit and the third digit (`2`) matches the fourth digit.
- `1111` produces `4` because each digit (all `1`) matches the next digit.
- `1234` produces `0` because no digit matches the next.
- `91212129` produces `9` because the only digit that matches the next one is the last digit, `9`.

Your solution should run in `O(N)` time and take up `O(1)` extra space.

## Solution

```js
function sillySum(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === string[(i + 1) % string.length])
      sum += parseInt(string[i]);
  }

  return sum;
}
```

# Question #4
## Checksum

You are given a 2D array of random integers. Your goal is to calculate the `checksum` of these integers. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all these differences.

**Examples:**

```
[
 [5, 1, 9, 5],
 [7, 3],
 [2, 6, 8]
]
```

* The first row's largest and smallest values are `9` and `1`, and their difference is `8`
* The second row's largest and smallest values are `7` and `3`, and their difference is `4`
* The third row's difference is `6`
* The total `checksum` of this input would be `8 + 4 + 6 = 18`

**This method should take `O(N * K)` time, where N is the number if integers in each row, and K is the number of rows. It should take O(1) extra space**

## Solution

```js

function checksum(matrix) {
  let totalSum = 0;

  matrix.forEach(row => {
    let min = row[0], max = row[0];

    row.forEach(int => {
      if (int < min) min = int;
      if (int > max) max = int;
    })

    totalSum += max - min;
  })

  return totalSum;
}
```

# Question #5
## Queues From Stacks

Implement a Queue using two Stacks. Assume you already have a `Stack` class with the appropriate methods: `push`, `pop`, `peek`, `isEmpty`, and `size`. Create a class, `StackQueue`, that implements this. Your `StackQueue` should function through two primary methods, `enqueue` and `dequeue`. However, feel free to write any additional helper methods that you see fit.

**Constraints:**

* `enqueue`: `O(1)`
* `dequeue:` `O(N)`, but `O(1)` amortized

## Solution

**Overview:**
* We instantiate our `StackQueue` with two stacks, left and right.
* The goal is to **always** dequeue from the right stack, and always enqueue on the left stack
* If the right stack is empty, that means we have to flip the left stack into the right one
  * We can implement a helper method, `flipStacks`, that calls pops every element from the left stack _onto_ the right stack until the left stack is empty

```js
class StackQueue {
  constructor() {
    this.leftStack = new Stack();
    this.rightStack = new Stack();
  }

  flipStacks() {
    while (!this.leftStack.isEmpty()) {
      this.rightStack.push(this.leftStack.pop());
    }
  }

  enqueue(data) {
    this.leftStack.push(data);
  }

  dequeue() {
    if (this.rightStack.isEmpty())
      this.flipStacks();

    return this.rightStack.pop();
  }
}
```

**Takeaway Question:**
* What is amortization? Why does the `dequeue` method _amortize_ to `O(1)`?
> Amortization means that, over time, our `dequeue` method will **average out** to be `O(1)`. This happens because, even though `flipStacks` is `O(N)`, it gives us `N` free `O(1)` operations.
