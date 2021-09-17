const isValidSudoku = function (board) {
  const validChar = new Set()
  validChar.add('1')
  validChar.add('2')
  validChar.add('3')
  validChar.add('4')
  validChar.add('5')
  validChar.add('6')
  validChar.add('7')
  validChar.add('8')
  validChar.add('9')
  if (board.length !== 9) return false
  const seenItems = new Set()
  for (let r = 0; r < 9; r++) {
    if (board[r].length !== 9) return false
    for (let c = 0; c < 9; c++) {
      let value = board[r][c]
      if (value === '.') continue
      let row = `row: ${r} value: ${value}` // rows
      let col = `col: ${c} value: ${value}` // columns
      let boxNum = 3 * Math.floor(r / 3) + Math.floor(c / 3)
      let box = `subBox: ${boxNum} value: ${value}` // boxes
      if (validChar.has(value)) {
        if (seenItems.has(row) || seenItems.has(col) || seenItems.has(box)) {
          return false
        }
        seenItems.add(row)
        seenItems.add(col)
        seenItems.add(box)
      }
    }
  }
  return true
}

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

const board3 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
console.log(isValidSudoku(board1))
console.log(isValidSudoku(board2))
console.log(isValidSudoku(board3))
