// Code your solution in this file
function findMatching(list, name) {
 return list.filter(function (ap) { return ap.toUpperCase() === name.toUpperCase()});
}

function  fuzzyMatch(list, name) {
  return list.filter(function(ap) {return ap[0] === name[0]});
}

function  matchName(list, name) {
  return list.filter(function(ap) {return ap.name === name});
}
