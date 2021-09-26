// What song was the #1 song for the most weeks of 2000, who was the artist,
// and how many weeks was it at #1?

const fs = require('fs');

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8');
  var textByLine = text.split('\n');
  textByLine.forEach((word) => word.trim());
  textByLine = textByLine.filter((word) => word !== '');
  return textByLine;
};
const parseToListOfObjects = (array) => {
  const arrayOfObjects = [];
  let obj = {};
  array.forEach((item) => {
    let itemArr = item.split(',');
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
// console.log(listOfObjects);
const getNumberOneSongsWithArtist = () => {
  const result = {};
  console.log(listOfObjects.length);
  for (let i = 0; i < listOfObjects.length; i++) {
    if (listOfObjects[i].peakRank === '1') {
      if (result[listOfObjects[i].song] === undefined) {
        result[listOfObjects[i].song] = 1;
      } else {
        result[listOfObjects[i].song]++;
      }
    }
  }
  let max = 0;
  let song = '';

  for (let key in result) {
    if (result[key] > max) {
      max = result[key];
      song = key;
    }
  }

  return [song, max];
};
console.log(getNumberOneSongsWithArtist());
