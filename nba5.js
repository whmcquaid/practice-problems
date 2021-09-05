// Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
// - 6 times: Michael Jordan
// - 3 times: Shaquille O'Neal, LeBron James
// - 2 times: <etc>

import fs from 'fs'

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const getMVPs = () => {
  const nbaArray = getListFromFile('nba_finals.csv')
  let newObj = {}
  nbaArray.forEach((el) => {
    let arr = el.split(',')
    if (
      newObj[arr[4].slice(0, -1)] === undefined &&
      arr[4].slice(0, -1) !== '' &&
      arr[4].slice(0, -1) !== 'MVP'
    ) {
      newObj[arr[4].slice(0, -1)] = 1
    } else if (arr[4].slice(0, -1) !== 'MVP' && arr[4].slice(0, -1) !== '') {
      newObj[arr[4].slice(0, -1)]++
    }
  })
  let mvpArr = Object.entries(newObj)
  mvpArr.sort((a, b) => b[1] - a[1])
  mvpArr.forEach((el) => {
    console.log(el[1] + ' time(s): ' + el[0])
  })
}
getMVPs()
