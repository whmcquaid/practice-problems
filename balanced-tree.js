var isBalanced = function (root) {
  let isBalanced = true
  // keep track of level of right and left
  // if more than one level deeper than other
  // return false

  function checkSubTreeDepth(root) {
    if (!root) return 0
    let left = checkSubTreeDepth(root.left)
    let right = checkSubTreeDepth(root.right)
    if (Math.abs(left - right) > 1) {
      isBalanced = false
    }
    return 1 + Math.max(left, right)
  }
  checkSubTreeDepth(root)
  return isBalanced
}
