const { fetchTextDataFromDay } = require('../utils/loadInputStr');

const getFinalTopCrates = async () => {
  const inputStr = await fetchTextDataFromDay(5);
  const [stacksLines, directionsLines] = inputStr.split('\n\n').map((block) => block.split('\n'));
  const unitLength = 4;
  const numOfStacks = (stacksLines[0].length + 1) / unitLength;
  const stacks = Array.from({ length: numOfStacks }, () => []);
  const crateRe = /[A-Z]/g;

  for (let i = 0; i < stacksLines.length; i++) {
    for (let j = 0; j < numOfStacks; j++) {
      const ind = (j * unitLength) + 1;
      const reTest = new RegExp(crateRe);

      if (reTest.test(stacksLines[i].charAt(ind))) stacks[j].unshift(stacksLines[i].charAt(ind));
    }
  }

  const directionRe = /(move|from|to)/gim;

  for (let i = 0; i < directionsLines.length; i++) {
    let [amt, start, end] = directionsLines[i].replace(directionRe, '').split(' ').filter(Boolean);

    stacks[end - 1].push(...stacks[start - 1].splice(stacks[start - 1].length - amt, amt))
  }

  let res = [];

  for (let i = 0; i < numOfStacks; i++) {
    res.push(stacks[i].pop());
  }

  return res.join('');
};

const printAns = async () => {
  const res = await getFinalTopCrates();

  console.log(res);
};

printAns();
