const { invertTree } = require('./invert-binary-tree');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

test('root = [2,1,3]', () => {

    // Input Tree: [2, 1, 3]
    const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

    // Expected Tree after inversion: [2, 3, 1]
    const expected = new TreeNode(2, new TreeNode(3), new TreeNode(1));

    // Call invertTree function
    invertTree(root);

    // Check if the result matches the expected tree
    expect(root).toEqual(expected);
})

test('root = []', () => {
    root = []
    invertTree(root)
    expect(root).toEqual([])
})

test('root = [4, 2, 7, 1, 3, 6, 9]', () => {
    const root = new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

    const expected = new TreeNode(4,
        new TreeNode(7, new TreeNode(9), new TreeNode(6)),
        new TreeNode(2, new TreeNode(3), new TreeNode(1))
    );

    invertTree(root);
    expect(root).toEqual(expected);
});
