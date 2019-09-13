// Code your solution in this file
function findMatching(arr, str) {
  let newArray = arr.filter(function (driver) { return driver.toLowerCase() === str.toLowerCase() });
  return newArray;
}

function fuzzyMatch(arr, str) {
  let newArray = arr.filter(function (driver) { return driver.slice(0, str.length).toLowerCase() === str.toLowerCase() });
  return newArray;
}

function matchName(obj, str) {
  let newObject = obj.filter(function (driver) { return driver.name === str });
  return newObject;
}
