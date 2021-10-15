function hourglassSum(arr) {
  let max = -63
  let hourGlassVal = max
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + 2 < arr.length && j + 2 < arr[i].length) {
        hourGlassVal =
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2]
      }
      if (hourGlassVal > max) {
        max = hourGlassVal
      }
    }
  }
  return max
}
