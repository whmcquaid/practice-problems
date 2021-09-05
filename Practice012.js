/* Which of the letters Q, X and Z is least common? */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
let newObj= {};
for (let i = 0; i < textByLine.length; i++) {
  if ((textByLine[i].includes('Q'))) {
       if (!newObj['Q']) {
         newObj['Q'] = 1;
       } else {
         newObj['Q']++;
       }
  }
   if (textByLine[i].includes('X')){
    if (!newObj['X']) {
      newObj['X'] = 1;
    } else {
      newObj['X']++;
    }
  }
  if (textByLine[i].includes('Z')){
    if (!newObj['Z']) {
      newObj['Z'] = 1;
    } else {
      newObj['Z']++;
    }
  }
}
console.table(newObj)