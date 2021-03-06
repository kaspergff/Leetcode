/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = (root, res = []) => {
  if (!root) return [];
  if (root) res.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], res);
  }
  return res;
};
