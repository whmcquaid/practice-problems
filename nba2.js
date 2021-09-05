// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
import fs from 'fs'

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const getYearsWon = (team) => {
  const nbaArray = getListFromFile('nba_finals.csv')
  let newArr = []
  nbaArray.forEach((el) => {
    let arr = el.split(',')
    if (arr[1] === team) {
      newArr.push(arr[0])
    }
  })
  return newArr
}
console.log(getYearsWon('Los Angeles Lakers'))
