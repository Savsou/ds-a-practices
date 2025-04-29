//https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75
var leafSimilar = function (root1, root2) {
    const collectValues = (root, leafValues) => {
        if (!root) {
            return;
        }

        if (!root.left && !root.right) {
            leafValues.push(root.val);
        }

        collectValues(root.left, leafValues);
        collectValues(root.right, leafValues);

    }

    let r1 = [];
    let r2 = [];
    collectValues(root1, r1);
    collectValues(root2, r2);

    return JSON.stringify(r1) == JSON.stringify(r2)
};
