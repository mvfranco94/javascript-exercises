const sumAll = function(start, end) {

  if (start < 0 || end < 0) return 'ERROR';
  if (!Number.isInteger(start) || !Number.isInteger(end))
    return 'ERROR';

  if (Number.isNaN(start) || Number.isNaN(end))
    return 'ERROR';
  
  let sum = 0;
  
  if (start > end) {
    [start, end] = [end, start];
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
