var findMedianSortedArrays = function (nums1, nums2) {
  // merge and sort arrays
  const merged = [...nums1, ...nums2].sort((a, b) => a - b)
  // get length of merged
  const len = merged.length
  // if even length add two middle elements / 2
  if (len % 2 === 0) {
    return (merged[len / 2] + merged[len / 2 - 1]) / 2
  }
  // otherwise return middle element
  return merged[parseInt((len - 1) / 2)]
}
