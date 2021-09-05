// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
import fs from 'fs'

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const getWinnerByYear = (year) => {
  const nbaArray = getListFromFile('nba_finals.csv')
  let newObj = {}
  nbaArray.forEach((el) => {
    let arr = el.split(',')
    newObj[arr[0]] = [arr[1], arr[2], arr[3], arr[4]]
  })
  return newObj[year][0]
}
console.log(getWinnerByYear('2009'))
