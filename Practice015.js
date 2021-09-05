import fs from 'fs';
//var fs = require("fs");
// use fs to read the file
const baby_names2020 = './baby_names_2020_short.txt';
const baby_names1880 = './baby_names_1880_short.txt';

const getListFromFile = (fileNameString) =>  {
  var text = fs.readFileSync(fileNameString).toString('utf-8');
  var textByLine = text.split("\n");
  textByLine.forEach(word => word.trim());
  textByLine = textByLine.filter(word => word !== '');
  return textByLine;
}

const getLongestStrings = (list) => {
  let longestStrings = list.filter(word => word.length >= list[0].length);
  return longestStrings;
}

const list_babyNames1880 = getListFromFile(baby_names1880);
const list_babyNames2020 = getListFromFile(baby_names2020);

const getAlikeElements = (lista, listb) => {
  let result = [];
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < listb.length; j++) {
      if (lista[i] == listb[j]) {
        result.push(listb[j]);
      }
    }
  }
  return result;
}

console.log(getAlikeElements(list_babyNames1880, list_babyNames2020));



// list.sort((a, b) => b.length - a.length);
// console.log(getLongestStrings(list));

