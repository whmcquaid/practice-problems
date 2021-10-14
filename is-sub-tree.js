var isSubtree = function (s, t) {
  if (!s || !t) {
    return false
  }
  if (isSameTree(s, t)) {
    return true
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t)

  function isSameTree(s, t) {
    if (!s && !t) {
      return true
    }
    if (s !== null && t !== null && s.val === t.val) {
      return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
    }
    return false
  }
}
