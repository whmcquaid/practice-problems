// Which teams have made it to the NBA finals but have never won?
import fs from 'fs'

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const getTeamsThatNeverWon = () => {
  const nbaArray = getListFromFile('nba_finals.csv')
  let newObj = {}
  let losers = []
  let winners = []
  nbaArray.forEach((el) => {
    let arr = el.split(',')
    losers.push(arr[2])
    winners.push(arr[1])
  })
  let result = losers.filter((el) => !winners.includes(el))
  let mySet = new Set(result)
  return mySet
}
console.log(getTeamsThatNeverWon())
