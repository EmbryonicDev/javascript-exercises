const fibonacci = function(member) {
  let a = 1, b = 1, c = '';
  if(member < 0) return "OOPS";
  if(member == 1 || member == 2) return 1;
  for(i = 3; i <= member; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c
};

// Do not edit below this line
module.exports = fibonacci;
