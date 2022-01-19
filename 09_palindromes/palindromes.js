const palindromes = function(str) {
  const regex = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let stripString = str.replace(regex, '').toLowerCase();
  return (
    stripString
    .split('')
    .reverse()
    .join('') == stripString
  )
};

// Do not edit below this line
module.exports = palindromes;
