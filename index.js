// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, findLetters) {
  return list.filter(function(driverName){
    return driverName.startsWith(findLetters);
  });
}

function matchName(list, findName){
  return list.filter(function(driverName){
    return driverName.name === findName;
  });
}
