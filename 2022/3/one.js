const { rucksacks } = require('./rucksacks');
const { toPriorityVal } = require('./toPriorityVal');

const getSubstr = (one, two) => {
  let res;

  for (let i = 0; i < one.length; i++) {
    if (two.indexOf(one[i]) > -1) {
      res = one[i];
      break;
    }
  }

  return res;
}

const getRucksackPriority = (str) => {
  const [compOne, compTwo] = [str.slice(0, str.length / 2), str.slice(str.length / 2)];

  return toPriorityVal(getSubstr(compOne, compTwo));
};

const getRucksackPrioritySum = (rucksacks) => rucksacks.reduce((acc, curr) => acc + getRucksackPriority(curr), 0);

console.log(getRucksackPrioritySum(rucksacks));
