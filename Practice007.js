/* Contain all 5 vowels? */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
let newArr = [];
for (let i = 0; i < textByLine.length; i++) {
  if ((textByLine[i].includes('A')) && (textByLine[i].includes('E')) && (textByLine[i].includes('I'))
      && (textByLine[i].includes('O')) && (textByLine[i].includes('U'))) {
    newArr.push(textByLine[i]);
  }
}
console.log(newArr);