# Partner A

## Time to innovate
* Give me an example of a time you used customer feedback to drive improvement or innovation.
* What was the situation and what action did you take?

## Floating Point Precision

* What will the code below output? Explain your answer.

```JavaScript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

### Answer
An educated answer to this question would simply be: “You can’t be sure. it might print out `0.3` and `true`, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

```JavaScript
0.30000000000000004
false
```

A typical solution is to compare the absolute difference between two numbers with the special constant `Number.EPSILON`:

```JavaScript
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
```

## River Sizes
You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s.  Each 0 represents land, and each 1 represents part of a river.  A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent).  The number of adjacent 1s forming a river determines its size.  Write a function that returns an array of the sizes of all rivers represented in the input matrix.  **Note that these sizes do not need to be in any particular order.**

Sample Input:
```JavaScript
[
  [1,0,0,1,0],
  [1,0,1,0,0],
  [0,0,1,0,1],
  [1,0,1,0,1],
  [1,0,1,1,0]
]
```
Sample Output:
```JavaScript
=> [1,2,2,2,5]
```

### Answer
This is a classic graph traversal problem.  To solve it, we'll iterate through the array/graph, treating each value as a node. If the node hasn't been seen and it's value is a `1` we'll preform a depth first search on it.  We'll consider each neighboring node ignoring nodes that are `0`s or `1`s that we've already seen.  When we do encounter a new `1` we'll increment our `currentRiverSize` and perform DFS again, this time with this new `1` as the root node.  When there are no more nodes left to explore, we'll push the currentRiverSize into our result array and continue iterating through our graph.  At the end we return our result array.  This function will run in **O(n) time and O(n) space** where n is the total number of elements in the input matrix.  The analysis on this problem can be a little tricky so let's break it down.  We're iterating through every input in the array so that's O(n) but what about all the other operations we're doing?  Well it turns out that our DFS is only exploring unexplored nodes, if it does encounter a previously seen node it's skipping it, a constant time operation.  Not only that, but we're marking nodes as visited during our DFS allowing us to skip them later when we encounter them a 2nd time in our iteration, therefore our time complexity remains at O(n).

```JavaScript
// helper function to get unvisited neighboring nodes
const getUnvistitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

// helper function to traverse nodes (essentially DFS)
const traverseNode = (i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;

  // stack to hold nodes we're still exploring
  const nodesToExplore = [[i, j]];

  // DFS
  while (nodesToExplore.length > 0) {
    const currentNode = nodesToExplore.pop();
    [i, j] = [currentNode[0], currentNode[1]];
    // continue if we've already seen the node or it's a zero
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue
    // node was neither a zero nor visited so we increment river size
    currentRiverSize++;
    const unvisitedNeighbors = getUnvistitedNeighbors(i, j, matrix, visited);
    for (let i = 0; i < unvisitedNeighbors.length; i++) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

const riverSizes = (matrix) => {
  // array to hold our result
  const sizes = [];
  // a 2d array to keep track of visited nodes
  const visited = matrix.map(row => row.map(value => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // if node is on the visited list - skip it
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}
```

# Partner B

## High Score
(Question and solution taken from Interview Cake)
You've created an extremely popular game. You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(nlogn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:
* an array of unsorted_scores
* the highest_possible_score in the game

and returns a sorted array of scores in less than O(nlogn) time.

Example (doin't give to interviewee; let them come up with their own inputs and outputs):
```ruby
unsorted_scores = [37, 89, 41, 65, 91, 53]
HIGHEST_POSSIBLE_SCORE = 100

sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
# returns [37, 41, 53, 65, 89, 91]
```
Clarification (again, not to be given out to interviewee unless asked for):
* In aiming for nlogn, we define `n` as the number of unsorted_scores because we're expecting the number of players to keep growing.
* We'll treat highest_possible_score as a constant instead of factoring it into our big O time and space costs, because the highest possible score won't change.

**Bonus: If the interviewee finishes early: Our solution returns a separate, sorted array. Could we instead sort the array in place? Does this change the time complexity? The space complexity?**

### Solution
We can build an array score_counts where the indices represent scores and the values represent how many times the score appears. Once we have that, we can generate a sorted array of the scores.

```ruby
def sort_scores(unsorted_scores, highest_possible_score)

  # array of 0s at indices 0..highest_possible_score
  score_counts = [0] * (highest_possible_score+1)

  # populate score_counts
  unsorted_scores.each do |score|
      score_counts[score] += 1
  end

  # populate the final sorted array
  sorted_scores = []

  # for each item in score_counts
  score_counts.each_with_index do |count, score|

      # for the number of times the item occurs
      (0...count).each do |time|

          # add it to the sorted array
          sorted_scores.push(score)
      end
  end

  return sorted_scores
end
```

#### Complexity
O(n) time and space.

Even though the solution has a nested loop towards the end, notice what those loops iterate over. The outer loop runs once for each unique number in the array. The inner loop runs once for each time that number occurred.

So in essence we're just looping through the n numbers from our input array, except we're splitting it into two steps: (1) each unique number, and (2) each time that number appeared.
Here's another way to think about it: in each iteration of our two nested loops, we append one item to sorted_scores. How many numbers end up in sorted_scores in the end? Exactly how many were in our input array, n,

#### Takeaways
Counting is a common pattern in time-saving algorithms. It can often get you O(n) runtime, but at the expense of adding O(n) space. In an interview, being able to talk through these trade-offs and considerations will earn you brownie points with the interviewer.

## Roman Numerals

### (Part 1)
Given an integer between 1-3999, convert it to a roman numeral.

### (Part 2)
Given a roman numeral between 1-3999, convert it to an integer.


### Solution

Part 1

```ruby
def intToRoman(num)
  m = ["", "M", "MM", "MMM"]
  c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  m[num/1000] + c[(num%1000)/100] + x[(num%100)/10] + i[num%10]
end

p intToRoman(1916) == 'MCMXVI'
```

Part 2

```ruby
def romanToInt(string)
  roman = {'M'=> 1000,'D'=> 500 ,'C'=> 100,'L'=> 50,'X'=> 10,'V'=> 5,'I'=> 1}
  result = 0
  (string.length - 1).times do |i|
    if roman[string[i]] < roman[string[i+1]]
      result -= roman[string[i]]
    else
      result += roman[string[i]]
    end
  end
  result + roman[string[-1]]
end

p romanToInt('MCMXVI') == 1916

```
