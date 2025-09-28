const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(integers) {
  return integers.reduce((total, num) => total + num, 0);
};

const multiply = function(integers) {
  return integers.reduce((product, num) => product * num, 1);
};

const power = function(base, exponent) {
  let result = 1;
  for	(let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(n) {
	if (n == 1 || n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
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