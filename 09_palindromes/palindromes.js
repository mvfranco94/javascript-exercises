const palindromes = function (text) {
  const cleanText = text
    .toLowerCase()
    .replaceAll(/[^a-zA-Z0-9]/g, '');
  return  cleanText === cleanText.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
