function findMatching(arr, str){
  return arr.filter(function (i) { return i.toLowerCase() === str.toLowerCase(); } );
}

function fuzzyMatch(arr, str){
  return arr.filter(function (i) { return i.startsWith(str); } );
}

function matchName(arr, str){
  return arr.filter(function (i) { return i.name === str; } );
}
