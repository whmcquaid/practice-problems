var lengthOfLastWord = function (s) {
  // create a result string
  let result = ''
  // split on spaces
  let splitString = s.split(' ')
  let filteredArr = splitString.filter((el) => el !== '')
  // return the last word

  return filteredArr[filteredArr.length - 1]
}
console.log(lengthOfLastWord('   fly me   to   the moon  '))
