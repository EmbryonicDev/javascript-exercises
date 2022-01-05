// Original Data
// const sumAll = function() {

// };

const sumAll = function(num1, num2) {

  if (num1 > num2) {
    const temp = num2;
    num2 = num1;
    num1 = temp;
  }

  if ((num1 || num2) < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

  let finalSum = 0;

  for(let i = num1; i < num2 + 1; ++i) {
    finalSum += i;
    console.log(finalSum);
    
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
