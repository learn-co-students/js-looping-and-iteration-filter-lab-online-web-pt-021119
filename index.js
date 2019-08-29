// Code your solution in this file

function findMatching(objects, name) {
  const result = objects.filter(function (n) {
    return n.toLowerCase() == name.toLowerCase();
  });
  return result;
};

function fuzzyMatch(objects, query) {
  const result = objects.filter(function (n) {
    return n.slice(0,1).includes(query.slice(0,1));
  });
  return result;
};

function matchName(objects, name) {
  const result = objects.filter(function (n) {
    return n.name == name;
  });
  return result;
};
