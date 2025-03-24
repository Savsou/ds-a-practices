function findMissingSmallestPositive(arr) {
    if (Math.max(...arr) < 1) {
        return 1
    }

    let numSet = new Set(arr.filter(num => num > 0));
    let min = 1

    while (numSet.has(min)) {
        min += 1;
    }

    return min;
}

console.log(findMissingSmallestPositive([-1, -3]))
console.log(findMissingSmallestPositive([1, 3, 6, 4, 1, 2]))
