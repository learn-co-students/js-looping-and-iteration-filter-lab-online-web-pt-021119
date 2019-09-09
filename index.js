function findMatching(array, string){
  let newArray = array.filter(function(name){return name===string || name===string.toLowerCase();});
  return newArray;
}

function fuzzyMatch(array, letters){
  let testLength = letters.length;
  let newArray = array.filter(name => name.slice(0,testLength)===letters);
  return newArray;
}

function matchName(array, string){
  let newArray = array.filter(object => object['name']===string);
  return newArray;
}

// if we want to make the matchName function also ask for the 'key'
// function matchName(array, key, string){
//   let newArray = array.filter(object => object[key]===string);
//   return newArray;
// }
