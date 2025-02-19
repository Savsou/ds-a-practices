//support function
function merge(leftArray, rightArray) {
    let result = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift())
        } else {
            result.push(rightArray.shift())
        }
    }

    return [...result, ...leftArray, ...rightArray]
}

function merge_sort(array) {
    if (array.length <= 1) {
        return array.slice()
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    const sortedLeftHalf = merge_sort(leftHalf);
    const sortedRightHalf = merge_sort(rightHalf);

    return merge(sortedLeftHalf, sortedRightHalf);
}

module.exports = { merge_sort }
