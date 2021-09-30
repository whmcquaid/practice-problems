/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // find the first letter in the word
  // (hey, this means 2d loop!!!)
  // for int i=
  // for int j=
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        // if we found first word
        if (depthFirstSearch(board, word, i, j, new Set())) {
          return true
        } //
      }
    }
  }

  function depthFirstSearch(board, word, i, j, visitedIndices) {
    // if we have already visited i j
    if (visitedIndices.has(`${i},${j}`)) {
      return false
    }
    // return false

    // if the i j are out of bounds
    if (i >= board.length || i < 0 || j > board[0].length || j < 0) {
      return false
    }
    // if board character doesnt match current character
    if (board[i][j] !== word[0]) {
      return false
    }
    // if board char === current char and the word is one char
    if (board[i][j] === word[0] && word.length === 1) {
      // base case
      return true
    }
    visitedIndices.add(`${i},${j}`)
    const newWord = word.slice(1)
    const doesExist =
      depthFirstSearch(board, newWord, i + 1, j, visitedIndices) ||
      depthFirstSearch(board, newWord, i - 1, j, visitedIndices) ||
      depthFirstSearch(board, newWord, i, j + 1, visitedIndices) ||
      depthFirstSearch(board, newWord, i, j - 1, visitedIndices)
    visitedIndices.delete(`${i},${j}`)
    return doesExist
  }
  return false
}
const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word1 = 'ABCCED'
const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word2 = 'SEE'
const board3 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word3 = 'ABCB'
console.log(exist(board1, word1))
console.log(exist(board2, word2))
console.log(exist(board3, word3))
