// Write a function that takes as an argument a team name and returns the first year the team won the NBA finals.
import fs from 'fs'

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const getFirstYearWon = (team) => {
  const nbaArray = getListFromFile('nba_finals.csv')
  let newArr = []
  nbaArray.forEach((el) => {
    let arr = el.split(',')
    if (arr[1] === team) {
      newArr.push(arr[0])
    }
  })
  //sort the array and return 1st year won
  newArr.sort()
  return newArr[0]
}
console.log(getFirstYearWon('Los Angeles Lakers'))
