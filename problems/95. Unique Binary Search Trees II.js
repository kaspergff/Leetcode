/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const req = (start, end) => {
    if (start > end) return [null];

    let res = [];

    for (let i = start; i <= end; i++) {
      let left = req(start, i - 1);
      let right = req(i, end);
      for (const l of left) {
        for (let r of right) {
          res.push(new TreeNode(i, l, r));
        }
      }
    }
    return res;
  };
  return req(1, n);
};
