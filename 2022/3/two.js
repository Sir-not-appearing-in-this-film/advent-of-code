const { rucksacks } = require('./rucksacks');
const { toPriorityVal } = require('./toPriorityVal');

const getBadgeType = (one, two, three) => {
  let cache = one.slice(),
    res;

  cache = [...two].filter((char) => cache.indexOf(char) > -1);
  res = cache.filter((char) => three.indexOf(char) > -1);

  for (let i = 0; i < cache.length; i++) {
    if (three.indexOf(cache[i]) > -1) {
      return cache[i];
    }
  }
};

let elfGroupsFromRucksacks = [[]],
  counter = 0,
  groupIndex = 0;
  
/**
 * [0, 1, 2] => 0
 * [3, 4, 5] => Math.ceil(n / 3) 1
 */

for (let i = 0; i < rucksacks.length; i++) {
  if (counter === 3) {
    groupIndex++;
    counter = 1;
    elfGroupsFromRucksacks.push([rucksacks[i]]);
    continue;
  }

  elfGroupsFromRucksacks[groupIndex].push(rucksacks[i]);
  counter++;
}

const getBadgePrioritySum = (elfGroups) => elfGroups.reduce((acc, curr, i) => {
  return acc + toPriorityVal(getBadgeType(...curr));
}, 0);

console.log(
  getBadgePrioritySum(elfGroupsFromRucksacks)
);
