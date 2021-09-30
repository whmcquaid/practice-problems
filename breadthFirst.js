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
var minDepth = function (root) {
  const breadthFirst = (node, level) => {
    if (node === null) {
      return Infinity
    }
    if (node.right === null && node.left === null) {
      return level
    } else {
      return Math.min(
        breadthFirst(node.right, level + 1),
        breadthFirst(node.left, level + 1)
      )
    }
  }
  if (!root) return 0
  return breadthFirst(root, 1)
}
