const removeFromArray = function(array, ...excludeItems) {
  return array.filter(item => !excludeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
