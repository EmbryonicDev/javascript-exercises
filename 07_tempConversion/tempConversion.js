// // Original Data
// const ftoc = function() {

// };

// const ctof = function() {

// };

const ftoc = function(fah) {
  let celsius = Math.round(((5/9)*(fah-32)) * 10 ) / 10;
  return celsius;
};

const ctof = function(toFar) {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
