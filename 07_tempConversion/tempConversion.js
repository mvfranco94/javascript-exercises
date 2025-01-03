const convertToCelsius = function(fahrenheit) {
  // x °F ≘ (x − 32) × ⁠5 / 9⁠ °C
  return +((fahrenheit - 32) *  5 / 9).toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  // x °C ≘ (x × ⁠9 / 5⁠ + 32) °F
  return +(celsius * 9 / 5+ 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
