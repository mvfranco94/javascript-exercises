const fibonacci = function(nth) {
  if (nth < 0) return 'OOPS';

  let prev = 1;
  let curr = 0; 
  
  for (let i = 0; i < nth; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;