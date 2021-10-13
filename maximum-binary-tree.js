var constructMaximumBinaryTree = function (nums) {
  return helper(nums)
  function helper(numArr) {
    // get index of max value
    let maxIndex = numArr.indexOf(Math.max(...numArr))
    if (numArr.length === 0) {
      // handle leafs
      return null
    }
    // build the head node
    let head = new TreeNode(numArr[maxIndex])
    // build the rest recursively
    head.left = helper(numArr.slice(0, maxIndex))
    head.right = helper(numArr.slice(maxIndex + 1))
    return head
  }
}
