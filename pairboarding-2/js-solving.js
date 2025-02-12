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

// maxOfThree(arr1);

module.exports = { maxOfThree }
