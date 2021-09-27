// what artist had the most songs charted in 2000 ? what were those songs?

// use an object to store artist names as keys and the values being sets of song titles

const fs = require('fs');

const getListFromFile = (fileNameString) => {
  var text = fs.readFileSync(fileNameString).toString('utf-8');
  var textByLine = text.split('\n');
  textByLine.forEach((word) => word.trim());
  textByLine = textByLine.filter((word) => word !== '');
  return textByLine;
};
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

const getArtistWithMostSongsOnBoard = () => {
  let songsByArtist = {};
  let max = 0;
  let artist = '';
  for (let i = 0; i < listOfObjects.length; i++) {
    if (songsByArtist[listOfObjects[i].artist] === undefined) {
      songsByArtist[listOfObjects[i].artist] = new Set();
    }
    songsByArtist[listOfObjects[i].artist].add(`${listOfObjects[i].song}`);
    if (songsByArtist[listOfObjects[i].artist].size > max) {
      max = songsByArtist[listOfObjects[i].artist].size;
      artist = listOfObjects[i].artist;
    }
  }
  return [artist, max, songsByArtist[artist]];
};
console.log(getArtistWithMostSongsOnBoard());
