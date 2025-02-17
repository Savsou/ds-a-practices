//Triple Maximum
function maxOfThree(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    let min1 = Infinity
    let min2 = Infinity

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max3 = max2
            max2 = max1
            max1 = arr[i]
        } else if (arr[i] > max2) {
            max3 = max2
            max2 = arr[i]
        } else if (arr[i] > max3) {
            max3 = arr[i]
        }

        if (arr[i] < min1) {
            min2 = min1
            min1 = arr[i]
        } else if (arr[i] < min2) {
            min2 = arr[i]
        }
    }

    let product1 = max1 * max2 * max3;
    let product2 = max1 * min1 * min2;
    let max = Math.max(product1, product2)

    return max
}

// arr1 = [10, 3, 5, 6, 20];
// arr2 = [-10, -3, -5, -6, -20];

// console.log(maxOfThree(arr1));


//Intersecting Arrays - first function is close to O(n2) because of includes
// function intersection(firstArray, secondArray) {
//     let longest = firstArray.length > secondArray.length ? firstArray : secondArray
//     let shortest = firstArray.length > secondArray.length ? secondArray : firstArray
//     const intersectArray = [];

//     for (let i = 0; i < shortest.length; i++) {
//         if (longest.includes(shortest[i])) {
//             if (!intersectArray.includes(shortest[i]))
//                 intersectArray.push(shortest[i])
//         }
//     }

//     return intersectArray;
// }
//this would be a hash map lookup
function intersection(firstArray, secondArray) {
    const letterStore = {};
    const intersectionArray = [];

    firstArray.forEach(element => letterStore[element] = 1);

    secondArray.forEach((element) => {
        if (letterStore[element] === 1) {
            intersectionArray.push(element);
            letterStore[element]++;
        }
    });

    return intersectionArray;
}

// const arr1 = [2, 2, 4, 1];
// const arr2 = [1, 2, 0, 2];

// console.log(intersection(arr1, arr2));


//Largest Difference
function findLargestDifference(array) {
    let currentMin = array[0]
    currentMaxDifference = 0

    for (let i = 1; i < array.length; i++) {
        if (currentMin < array[i] && ((array[i] - currentMin) > currentMaxDifference)) {
            currentMaxDifference = array[i] - currentMin
        } else if (array[i] <= currentMin) {
            currentMin = array[i];
        }
    }

    if (currentMaxDifference <= 0) return -1;

    return currentMaxDifference;
}

// let array1 = [1, 6, 5, 2, 9, -2]
// console.log(findLargestDifference(array1))


module.exports = { maxOfThree, intersection, findLargestDifference }
