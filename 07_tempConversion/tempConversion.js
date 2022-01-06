// // Original Data
// const ftoc = function() {

// };

// const ctof = function() {

// };

const ftoc = function(fah) {
  let celsius = Math.round(((5/9) * (fah-32)) * 10 ) / 10;
  return celsius;
};

const ctof = function(cel) {
  let fahrenheit = Math.round((cel * 1.8 + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
