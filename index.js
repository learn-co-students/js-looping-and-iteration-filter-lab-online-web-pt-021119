// Code your solution in this file
function findMatching(list, name) {
 return list.filter(function (el) { return el.toUpperCase() === name.toUpperCase()});
}

function  fuzzyMatch(list, name) {
  return list.filter(function(el) {return el[0] === name[0]});
}

function  matchName(list, name) {
  return list.filter(function(el) {return el.name === name});
}

//function matchName(list, name) {
 // return list.filter(el => el.name === name);
//}