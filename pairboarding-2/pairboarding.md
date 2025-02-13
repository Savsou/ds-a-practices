# Triple Maximum

Given an array of integers, find the largest product yielded from three of the integers.

**Examples:**

```js
maxOfThree([10, 3, 5, 6, 20]) // Output: 1200. Multiply 10, 6, 20

maxOfThree([-10, -3, -5, -6, -20]) // Output: -90

maxOfThree([1, -4, 3, -6, 7, 0]) // Output: 168
```

**Hints:**
* Remind your partner that you cannot simply take the max three numbers, as two negative numbers make a positive number
* We do not want our algorithm to _check_ for negative numbers or take absolute values

## Naive Solution (Not Accepted)

One naive solution would be `O(n^3)` time and `O(1)` space. It involves simply doing 3 nested loops and checking every possible combination of 3 numbers. That may look something like this:

```js
function maxOfThree(arr) {
  let maxProduct = arr[0] * arr[1] * arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const potentialProduct = arr[i] * arr[j] * arr[k];

        maxProduct = Math.max(maxProduct, potentialProduct);
      }
    }
  }

  return maxProduct;
}
```

This is an inefficient implementation. How can we do better?

## Solution

1. Scan the array and compute Maximum, second maximum and third maximum element present in the array.
2. Scan the array and compute minimum and second minimum element present in the array.
3. Return the maximum of product of max1, max2, and max3 and product of max1, min1, min2

The reason we use this approach is because we have to account for negative numbers. Our max product will _either_ be from the 3 max numbers, or will be from the max number and the 2 minimum numbers (if they are negative).

```js
function maxOfThree(array) {
  // Set up out variables. It's ok if we simply set them all to the first element of the array.
  let max1 = array[0], max2 = array[0], max3 = array[0];
  let min1 = arr[0], min2 = arr[0];

  for (let i = 0; i < array.length; i++) {
    // Handle updating maximum
    if (array[i] > max1) {
      // if this is true, we must update *all* maximum variables, essentially shifting them all down 1.
      max3 = max2;
      max2 = max1;
      max1 = array[i];
    } else if (arr[i] > max2) {
      // Same idea...
      max3 = max2;
      max2 = array[i];
    } else if (array[i] > max3) {
      max3 = array[i];
    }

    // Handle updating minimum
    if (array[i] < min1) {
      min2 = min1;
      min1 = array[i];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }

  return Math.max(max1 * max2 * max2, max1 * min1 * min2);
}
```

# Intersecting Arrays

Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!

**Example:**

```js
const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // Output: [2, 1]
```

## Solution

This solution takes `O(n)` time and `O(n)` space.

The logic here is to create a hashmap with the elements of the firstArray as the keys.
After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
If it does exist, add that element to the new array.

```js
function intersection(firstArray, secondArray) {

  const letterStore = {};
  const intersectionArray = [];

  firstArray.forEach(element => letterStore[element] = 1);

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  secondArray.forEach((element) => {
    if (letterStore[element] === 1) {
      intersectionArray.push(element);
      letterStore[element]++;
    }
  });

  return intersectionArray;
}
```

# Largest Difference

Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element. **Complete this problem in `O(n)` time**.

**Examples:**

```js
findLargestDifference([1, 6, 5, 2, 9, -2])

// Output is 8 based on the difference between 1 and 9. Note: It is not 11 from 9 and -2 because 9 comes before -2.
```

## Solution

```js
function findLargestDifference(array) {
  // If there is only one element, there is no difference
  if (array.length <= 1) return -1;

  // currentMin will keep track of the current lowest
  let currentMin = array[0];
  let currentMaxDifference = 0;

  // We will iterate through the array and keep track of the current max difference
  // If we find a greater max difference, we will set the current max difference to that variable
  // Keep track of the current min as we iterate through the array, since we know the greatest
  // difference is yield from `largest value in future` - `smallest value before it`

  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = array[i] - currentMin;
    } else if (array[i] <= currentMin) {
      currentMin = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (currentMaxDifference <= 0) return -1;

  return currentMaxDifference;
}
```

# Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

```js
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d
```

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.


# Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

```js
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.


# Kids With the Greatest Number of Candies

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

```js
Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
Example 2:

Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false]
Explanation: There is only 1 extra candy.
Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

Constraints:

n == candies.length
2 <= n <= 100
1 <= candies[i] <= 100
1 <= extraCandies <= 50
