const { caloriesByElf } = require('./caloriesByElf');

function getMaxCalories() {
  let total = 0;

  for (let i = 0; i < caloriesByElf.length; i++) {
    if (caloriesByElf[i] > total) total = caloriesByElf[i];
  }

  return total;
}

console.log(getMaxCalories());

module.exports = {
  getMaxCalories,
};
