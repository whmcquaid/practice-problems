var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true // no tree
  }
  if (p === null) return false
  if (q === null) return false
  // if root.val not equal return false
  const isEqual = q.val === p.val
  if (!isEqual) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
