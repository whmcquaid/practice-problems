var pathSum = function (root, targetSum) {
  // runningSum to keep the sum on the path
  // traverse the tree subtracting the values to the runningSum
  // if we get to a leaf and the runningSum === 0 -> return true
  // otherwise return false
  if (root === null) return [] // empty tree
  const path = []
  const validPaths = []
  let runningSum = targetSum

  function getPathSum(root) {
    runningSum -= root.val
    path.push(root.val)
    let leftside
    let rightside
    let isLeaf = root.left === null && root.right === null
    if (root.left !== null) {
      leftside = getPathSum(root.left)
    }
    if (root.right !== null) {
      rightside = getPathSum(root.right)
    }
    if (runningSum === 0 && isLeaf) {
      validPaths.push([...path])
    }
    path.pop()
    runningSum += root.val
  }
  getPathSum(root)
  return validPaths
}
