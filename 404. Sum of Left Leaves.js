/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  let exploreTree = (node, leftFlag) => {
    if (!node.left && !node.right && leftFlag) sum += node.val;
    if (node.left) exploreTree(node.left, true);
    if (node.right) exploreTree(node.right, false);
  };
  exploreTree(root, false);

  return sum;
};
