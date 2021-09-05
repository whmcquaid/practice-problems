/* Ends with GHTLY */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
let newArr = [];

for (let i = 0; i < textByLine.length; i++) {
  if ((textByLine[i].endsWith('GHTLY'))) {
    newArr.push(textByLine[i]);
  }
}
console.log(newArr);