const convertToCelsius = function(fahrenheit) {
  return roundToOneDecimal((fahrenheit - 32) * 5/9);
};

const convertToFahrenheit = function(celsius) {
  return roundToOneDecimal(celsius * 9/5 + 32);
};

function roundToOneDecimal (n) {
  return Math.round(n * 10) / 10;
}


console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
