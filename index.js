function findMatching(array, string) {
    let newArray = array.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase() });
    return newArray;
}

function fuzzyMatch(array, string) {
    let newArray = array.filter(function (driver) { return driver.slice(0,
        string.length).toLowerCase() === string.toLowerCase() });
        return newArray;
}

function matchName(object, string) {
    let newObject = object.filter(function (driver) { return driver.name === string});
    return newObject
}