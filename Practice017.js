/*
Word Solver

Part 1

Write some code that:
Takes a 7-character string (either as a command-line argument or as an argument to a function)
Prints out the words that can be made from those characters, along with their Scrabble scores, one word per line, in descending score order
Example input and output:

$ python scrabble_cheater.py SPCQEIU  # Use any language you like.
17 piques
17 equips
16 quips
16 pique
16 equip
15 quip
…

Resources:
Word list
Letter scores
Part 2

Extend the script to handle blank tiles. When reading the input, the character _ can be used as a wildcard — it can represent any letter.

Wildcards do not count towards a word's score.
*/
import fs from 'fs'
const scrabble = 'sowpods.txt'
const scores = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
}
const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8')
  var textByLine = text.split('\n')
  textByLine.forEach((word) => word.trim())
  textByLine = textByLine.filter((word) => word !== '')
  return textByLine
}
const dictionary = getListFromFile(scrabble)

// const dictionary = ['CAT', 'DOG', 'MOP', 'HAT', 'AT']
const calculateScore = (word) => {
  let result = 0
  word.split('').forEach((letter) => {
    result += scores[letter.toLowerCase()]
  })
  return result
}
function findWord(rack) {
  // for every word in the dictionary check every char in the rack to see if it is in the word. if it is use it up
  let result = []

  let rackCopy = rack

  for (let i = 0; i < dictionary.length; i++) {
    rackCopy = rack
    for (let k = 0; k < dictionary[i].length; k++) {
      if (rackCopy.includes(dictionary[i][k])) {
        let charIndex = rackCopy.indexOf(dictionary[i][k])
        rackCopy = rackCopy.slice(0, charIndex) + rackCopy.slice(charIndex + 1)

        if (k === dictionary[i].length - 1) {
          result.push([calculateScore(dictionary[i]), dictionary[i]])
          // add the word to an object with the key as the score
        }
      } else {
        break
      }
    }
  }
  // sort the result array
  result.sort((a, b) => b[0] - a[0])
  return result
}
console.table(findWord('SPCQEIU'))
