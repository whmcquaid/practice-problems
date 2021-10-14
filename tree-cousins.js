var isCousins = function (root, x, y) {
  // keep track of parent value
  // keep track of what level we are on
  // look for x and y on same level with different parents
  // find target should return the level and the parent of target

  const foundTargetX = findTarget(root, x, 0, root.val)
  const foundTargetY = findTarget(root, y, 0, root.val)
  if (
    foundTargetX.depth === foundTargetY.depth &&
    foundTargetX.parentVal !== foundTargetY.parentVal
  ) {
    return true
  }
  return false

  function findTarget(root, target, depth = 0, parentVal) {
    if (!root) return null
    if (target === root.val) {
      return {
        depth: depth,
        parentVal: parentVal,
      }
    }

    return (
      findTarget(root.left, target, depth + 1, root.val) ||
      findTarget(root.right, target, depth + 1, root.val)
    )
  }
}
