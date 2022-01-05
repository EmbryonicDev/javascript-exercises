// Original Data
// const repeatString = function() {

// };


// // My solution 1: 
// const repeatString = function(string, num) {
//   if(num < 0) return 'ERROR'
//   let word = ''
//   for(let i = 0; i < num; i++) {
//     word += string
//   }
//   return word
// };

// My solution 2:
const repeatString = function(string, num) {
  if(num < 0) return 'ERROR'
  let word = "";
  while (num > 0) {
    
    word += string;
    num--;
  }
  return word;
}


// // Solution 3 -> do while loop won't work here as it always runs through the loop at least once.
// const repeatString = function(string, num) {
//   let word = "";
//   if(num < 0) return 'ERROR'
//   do {
//     word += string;
//     num--;
    
//   } while(num > 0);
//   return word;
//   }


// // Do not edit below this line
module.exports = repeatString;



