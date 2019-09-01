// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (drivers) {return drivers.toLowerCase() === name.toLowerCase() })

};

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (drivers) {return drivers[0] === name[0] })

};

function matchName(drivers, name) {
  return drivers.filter(function (drivers) {return drivers.name === name })

};
