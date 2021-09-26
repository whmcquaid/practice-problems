// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

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

//  get songs that appear the most in an array of arrays with two indicies the song title and the number of weeks on the board

const getSongsThatAppearsMost = () => {
  let countNumberOfTimesSongsAppear = {};
  let songsOnChartsMostWeeks = [];
  for (let i = 0; i < listOfObjects.length; i++) {
    if (countNumberOfTimesSongsAppear[listOfObjects[i].song] === undefined) {
      countNumberOfTimesSongsAppear[listOfObjects[i].song] = 1;
    } else {
      countNumberOfTimesSongsAppear[listOfObjects[i].song]++;
    }
  }
  for (key in countNumberOfTimesSongsAppear) {
    if (countNumberOfTimesSongsAppear[key] > 25) {
      songsOnChartsMostWeeks.push([key, countNumberOfTimesSongsAppear[key]]);
    }
  }

  songsOnChartsMostWeeks.sort((a, b) => b[1] - a[1]);
  return songsOnChartsMostWeeks;
};
console.log(getSongsThatAppearsMost());
