// Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
// These were the number one songs of 2000:
// "Try Again" - Aaliyah
// "Say My Name" - Destiny's Child
// "What A Girl Wants" - Christina Aguilera
// "Maria Maria" - Santana Featuring The Product G&B
// "Smooth" - Santana Featuring Rob Thomas
// "Independent Women Part I" - Destiny's Child
// rank,song,artist,last-week,peak-rank,weeks-on-board,date

const fs = require('fs');

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8');
  var textByLine = text.split('\n');
  textByLine.forEach((word) => word.trim());
  textByLine = textByLine.filter((word) => word !== '');
  return textByLine;
};
// if we are inside quotes dont split on comma
// write our own split function
// iterate the string
// if we see a double quote grab all the text until the next double quote and push to the array
// if we see a comma grab the text to that point and push to the array
const mySplit = (string) => {
  let insideQuotes = false;
  let arrayFromString = [];
  let charCount = 0;
  let start = 0;
  let endWord = false;
  if (string.indexOf('"') !== -1) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '"') {
        insideQuotes = !insideQuotes;
      }
      if (string[i] === ',' && !insideQuotes) {
        endWord = !endWord;
      }
      if (endWord || i === string.length - 1) {
        arrayFromString.push(string.slice(start, start + charCount));
        charCount = 0;
        start = i + 1;
        endWord = !endWord;
      }
      charCount++;
    }
  } else {
    arrayFromString = string.split(',');
  }
  return arrayFromString;
};
const parseToListOfObjects = (array) => {
  const arrayOfObjects = [];
  let obj = {};
  array.forEach((item) => {
    let itemArr = mySplit(item);

    obj = {
      rank: itemArr[0],
      song: itemArr[1],
      artist: itemArr[2],
      lastWeek: itemArr[3],
      peakRank: itemArr[4],
      weeksOnBoard: itemArr[5],
      date: itemArr[6],
    };
    arrayOfObjects.push(obj);
  });
  return arrayOfObjects;
};

const billboardList = getListFromFile('billboard100_2000.csv');
const listOfObjects = parseToListOfObjects(billboardList);
const getNumberOneSongsWithArtist = () => {
  const resultSet = new Set();
  for (let i = 0; i < listOfObjects.length; i++) {
    if (listOfObjects[i].peakRank === '1') {
      resultSet.add(`${listOfObjects[i].song} - ${listOfObjects[i].artist}`);
    }
  }
  return resultSet;
};
console.log(getNumberOneSongsWithArtist());
