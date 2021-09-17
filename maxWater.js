const maxArea = (height) => {
  // loop over input
  // get the largest values in our height array and their indicies
  // formula is height of shorter of the two * difference between indicies

  let maxWater = 0
  let wallOne = 0
  let wallTwo = height.length - 1
  while (wallOne < wallTwo) {
    maxWater = Math.max(
      Math.min(height[wallOne], height[wallTwo]) * (wallTwo - wallOne),
      maxWater
    )
    if (height[wallOne] > height[wallTwo]) {
      wallTwo--
    } else if (height[wallOne] < height[wallTwo]) {
      wallOne++
    } else {
      wallOne++
      wallTwo--
    }
  }
  return maxWater
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
