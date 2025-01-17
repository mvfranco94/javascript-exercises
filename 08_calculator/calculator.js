const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(x) {
  let fact = 1;
  for (let i = x; i > 0; i--) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};