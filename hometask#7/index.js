

const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

const treeSum = (arr) => {
    const result = arr.reduce((acc, item) => {
        if (!Array.isArray(item)) {
            return acc += item;
        } else {
            return acc += treeSum(item);
        }
    }, 0);
    return result;
};

console.log(treeSum(arr));
