const { caloriesByElf } = require('./inputStr');

// works for both puzzles on day 1

function getMaxCaloriesByN(threshold = 1) {
  let maxVals = Array.from({ length: threshold }, () => 0);

  for (let i = 0; i < caloriesByElf.length; i++) {
    maxVals.sort();

    let currVal = caloriesByElf[i];

    if (currVal > maxVals[0]) {
      for (let j = 0; j < maxVals.length; j++) {
        const currMaxVal = maxVals[j];

        if (currVal > currMaxVal) {
          maxVals[j] = currVal;
          currVal = currMaxVal;
        } else break;
      }
    }
  }

  return maxVals.reduce((acc, curr) => acc + curr, 0);
}

// console.log(getMaxCaloriesByN(3));

module.exports = {
  getMaxCaloriesByN,
};
