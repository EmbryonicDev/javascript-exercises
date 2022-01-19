const findTheOldest = function(array) {
  return array.reduce((acc, cur) => {
    const oldestAge = getAge(acc.yearOfDeath, acc.yearOfBirth);
    const nextAge = getAge(cur.yearOfDeath, cur.yearOfBirth);
    return oldestAge < nextAge ? cur : acc;
  })
};

const getAge = function(death, birth) {
  if(!death) death = new Date().getFullYear();
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
