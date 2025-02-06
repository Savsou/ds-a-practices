//Solution 1:
function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    // const actualSum = arrayOfIntegers.reduce((acc, num) => acc + num, 0)
    let sumOfInt = 0;
    for (let i = 0; i < arrayOfIntegers.length; i++) {
        sumOfInt += arrayOfIntegers[i]
    }
    const upperLimitSum = (upperBound * (upperBound + 1)) / 2;
    const lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

    const theorySum = upperLimitSum - lowerLimitSum;

    // const result = theorySum - actualSum;
    const result = theorySum - sumOfInt;

    return result
};

//Question 1:
arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
upperBound = 9;
lowerBound = 1;

console.log(findMissingNumber(arrayOfIntegers, upperBound, lowerBound)); // Output: 8
