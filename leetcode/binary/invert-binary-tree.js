//https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
    if (root == null) {
        return null
    }

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};

module.exports = { invertTree };
