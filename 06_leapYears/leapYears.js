const leapYears = function(year) {
  const isYearDivisibleByFourHundred = year % 400 === 0;
  const isYearDivisibleByFour = year % 4 === 0;
  const isNotCentury = year % 100 != 0;
  return (isNotCentury && isYearDivisibleByFour) || isYearDivisibleByFourHundred  ;
};

// Do not edit below this line
module.exports = leapYears;
