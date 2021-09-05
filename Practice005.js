/* What are all the words containing B and X and are less than 5 letters? */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
let newArr = [];
for (let i = 0; i < textByLine.length; i++) {
  if ((textByLine[i].includes('B')) && (textByLine[i].includes('X')) && (textByLine[i].length < 5)) {
    newArr.push(textByLine[i]);
  }
}
console.log(newArr);