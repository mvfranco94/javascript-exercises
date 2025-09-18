const leapYears = function(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isACentury = year % 100 === 0
  const isDivisibleBy400 = year % 400 === 0;

  return isDivisibleBy4 && !isACentury || isDivisibleBy400; 
};

// Do not edit below this line
module.exports = leapYears;
