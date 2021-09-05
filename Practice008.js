/* Contains all 5 vowels in aphabetical order */
// import fs
var fs = require("fs");
// use fs to read the file
var text = fs.readFileSync("./sowpods.txt").toString('utf-8');
var textByLine = text.split("\n");
// create new array
let newArr = [];


// loop over the dictionary words
for (let i = 0; i < textByLine.length; i++) {
  // if current word contains all 5 vowels
  if ((textByLine[i].includes('A')) && (textByLine[i].includes('E')) && (textByLine[i].includes('I'))
      && (textByLine[i].includes('O')) && (textByLine[i].includes('U'))) {
        // initialize isOrdered boolean
        let isOrdered = true;
        // create variable to compare one vowel to next vowel
        let char = 'A';
        // loop over each letter in the word
        for (let j = 0; j < textByLine.length; j++) {
          // if the current letter is a vowel
          if((textByLine[i][j] === 'A') || (textByLine[i][j] === 'E') || (textByLine[i][j] === 'I') ||
             (textByLine[i][j] === 'O') || (textByLine[i][j] === 'U')){
            // and if the current vowel is greater than or equal to the previous vowel
            if (textByLine[i][j] >= char){
              // set previous vowel equal to current vowel
              char = textByLine[i][j];
              // set isOrdered to true
              isOrdered = true;
            } else {
              // else set it to false and exit this loop
            isOrdered = false;
            break;
           }
          }
        }
        // if the vowels are in order
        if (isOrdered) {
          // push the word to the array
        newArr.push(textByLine[i]);
        }
  }
}
console.log(newArr);