/* Longest Palindrome? */
import fs from 'fs'
//var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync('./sowpods.txt').toString('utf-8')
var textByLine = text.split('\n')
let resultArr = []
const isPalindrome = (string) => string === string.split('').reverse().join('')
for (let i = 0; i < textByLine.length; i++) {
  if (isPalindrome(textByLine[i])) {
    resultArr.push(textByLine[i])
  }
}
resultArr.sort((a, b) => b.length - a.length)
console.log(resultArr[0])
