//Solution 1:
function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {

    const actualSum = arrayOfIntegers.reduce((acc, num) => acc + num, 0)
    // let sumOfInt = 0;
    // for (let i = 0; i < arrayOfIntegers.length; i++) {
    //     sumOfInt += arrayOfIntegers[i]
    // }
    const upperLimitSum = (upperBound * (upperBound + 1)) / 2;
    const lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

    const theorySum = upperLimitSum - lowerLimitSum;

    const result = theorySum - actualSum;
    // const result = theorySum - sumOfInt;

    return result
};

//Question 1:
// arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// upperBound = 9;
// lowerBound = 1;

// console.log(findMissingNumber(arrayOfIntegers, upperBound, lowerBound));
// Output: 8


//Solution 2:
function findMagicIndex(array, start = 0, end = 7) {
    // let ogMid = Math.floor((start + end) / 2);

    if (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // console.log(mid);

        if (array[mid] === mid) {
            return mid;
        }

        //right now mid is 3
        let leftSide = findMagicIndex(array, start, mid - 1)
        if (leftSide !== -1) {
            return leftSide;
        }

        // if (leftSide == -1) {
        //     return findMagicIndex(array, mid - 1, end)
        // } else {
        //     return leftSide;
        // }

        let rightSide = findMagicIndex(array, mid + 1, end)
        if (rightSide !== -1) {
            return rightSide;
        }
    }

    return -1
}

//Question 2:
array1 = [-4, -2, 2, 6, 6, 6, 6, 10]
array2 = [-4, -2, 1, 6, 6, 6, 6, 10]
array3 = [-4, -2, 1, 6, 6, 6, 7, 10]

// findMagicIndex(array1);
// console.log(findMagicIndex(array3))


//Solution 3:

function sillySum(digits) {
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        //check the current digit with the next digit
        //% digits.length if the current i is the last digit, then the next digit will be the first digit in the array.
        //ex. digits[7] === digits[(7+1) % 8], digits[7] === digits[0]
        //parseInt to get from string to integer
        if (digits[i] === digits[(i + 1) % digits.length]) {
            sum += parseInt(digits[i]);
        }
    }

    return sum;
}

module.exports = { sillySum };
