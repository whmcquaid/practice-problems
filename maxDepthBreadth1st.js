var maxDepth = function (root) {
  // return the largest node level
  const breadthFirst = (node, level) => {
    if (node === null) {
      return 0
    }
    if (node.right === null && node.left === null) {
      return level
    } else {
      return Math.max(
        breadthFirst(node.right, level + 1),
        breadthFirst(node.left, level + 1)
      )
    }
  }
  if (!root) return 0
  return breadthFirst(root, 1)
}
