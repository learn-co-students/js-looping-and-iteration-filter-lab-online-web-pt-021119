// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {return driver.toLowerCase() == string.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  const regex = new RegExp(`^${string.toLowerCase()}`);
  return drivers.filter(function(driver){return driver.toLowerCase().match(regex)});
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string
  })
}