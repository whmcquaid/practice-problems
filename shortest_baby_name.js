// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./baby_names_2020_short.txt").toString('utf-8');
var textByLine = text.split("\n");
// sort my array by length
textByLine.sort((a, b) => a.length - b.length);
// create a new array by filtering out empty strings
let newArr = textByLine.filter(word => word !== '');
// console log the first element of the new array
// console.log(newArr[0]);

var babyNames = fs.readFile('./baby_names_2020_short.txt', 'utf8', (err, data) => {
  if (err) { throw new Error(err) }
  console.log(data);
})
// console.log(babyNames);