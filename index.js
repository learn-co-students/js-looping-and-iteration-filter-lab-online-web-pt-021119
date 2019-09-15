
function findMatching(drivers, str) {
    return drivers.filter(function (name) {return name.toLowerCase() === str.toLowerCase(); } );
}

function fuzzyMatch( drivers, str) {
    return drivers.filter(function (letter) {return letter.startsWith(str); }); 
}

function matchName(drivers, str){
    return drivers.filter(function (name) {return name.name === str; }); 
}