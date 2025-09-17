const repeatString = function(text, times) {
  if (times < 0) {
    return "ERROR";
  }

  let textRepeated = "";
  for (let i = 0; i < times; i++) {
    textRepeated = textRepeated.concat(text);
  }

  return textRepeated;
};

// Do not edit below this line
module.exports = repeatString;
