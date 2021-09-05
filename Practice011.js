/* Shortest word that Contains all 5 vowels? */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
let newArr = [];
let len = 15;
for (let i = 0; i < textByLine.length; i++) {
  if ((textByLine[i].includes('A')) && (textByLine[i].includes('E')) && (textByLine[i].includes('I'))
      && (textByLine[i].includes('O')) && (textByLine[i].includes('U'))) {
        if (textByLine[i].length < len){
          len = textByLine[i].length;
          newArr.push(textByLine[i]);
        }
  }
}
newArr.sort((a, b) => a.length - b.length);
console.log(newArr[0]);