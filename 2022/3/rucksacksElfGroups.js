const { inputStrTwo } = require('./inputStr');

const rucksacksElfGroups = inputStrTwo.split('\n\n').map((block) => block.split('\n'));

module.exports = {
  rucksacksElfGroups,
};
