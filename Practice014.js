// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");


// we are looking for letters that never repeat
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for (let i = 0; i < alphabet.length; i++){
  let doesRepeat = false;
  for (let j = 0; j <  textByLine.length; j++){
    if ((textByLine[j].includes(`${alphabet[i]}${alphabet[i]}`))){
      doesRepeat = true;
      break;
    }
  }
  if (!doesRepeat){
    console.log(alphabet[i]);
  }
}
