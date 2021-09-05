var plusOne = function (digits) {
  let number = digits.join('')
  number = parseInt(number) + 1
  let numberStr = number.toString()
  let numArr = numberStr.split('')
  return numArr.map((el) => parseInt(el))
}

console.log(plusOne([9, 9, 9, 9, 9]))
