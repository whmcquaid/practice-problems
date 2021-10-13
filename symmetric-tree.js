var isSymmetric = function (root) {
  let right = root.right
  let left = root.left
  function checkSymmetry(right, left) {
    if (!right || !left) return !right && !left // hit a leaf
    return (
      right.val === left.val &&
      checkSymmetry(right.right, left.left) &&
      checkSymmetry(right.left, left.right)
    ) // recurse!!
  }
  return checkSymmetry(right, left) // final return value from helper will be boolean
  // true if Symmetrical
}
