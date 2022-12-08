const { inputStr } = require('./inputStr');

const rounds = inputStr.split('\n').map((round) => round.split(' '));

module.exports = {
  rounds,
};
