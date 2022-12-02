const { inputStr } = require('./inputStr');

const calorieListStrByElf = inputStr.split('\n\n');
const caloriesByElf = calorieListStrByElf
  .map((lst) => lst.split('\n')
  .reduce((acc, curr) => {
    const n = Number(curr);

    return acc + n;
  }, 0));

module.exports = {
  caloriesByElf,
};

