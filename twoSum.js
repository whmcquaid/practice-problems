var hasPathSum = function (root, targetSum) {
  // runningSum to keep the sum on the path
  // traverse the tree subtracting the values to the runningSum
  // if we get to a leaf and the runningSum === 0 -> return true
  // otherwise return false
  if (root === null) return false // empty tree
  let runningSum = targetSum - root.val
  let leftside
  let rightside
  if (runningSum === 0 && root.left === null && root.right === null) {
    return true
  }
  if (root.left === null && root.right === null && runningSum !== 0) {
    return false
  }
  if (root.left !== null) {
    leftside = hasPathSum(root.left, runningSum)
  }
  if (root.right !== null) {
    rightside = hasPathSum(root.right, runningSum)
  }
  return leftside || rightside ? true : false
}
