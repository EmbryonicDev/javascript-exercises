const add = ((a, b) =>  a + b);

const subtract = ((a, b) => a - b);

const sum = function(array) {
	return (array.reduce((total, value) => total + value, 0))
};

const multiply = function(array) {
  return (array.reduce((a, b) => a * b, 1))
};

const power = ((number, power) => Math.pow(number, power));

const factorial = function(num) {
	if(num === 0 || num === 1) return 1;
  let product = 1;
  for(i = num; i > 0; i--) {
    product *= i;
  } 
  return product;
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
