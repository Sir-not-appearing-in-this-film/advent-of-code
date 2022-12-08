const toPriorityVal = (char) => char.charCodeAt(0) - (char.charCodeAt(0) > 90 ? 96 : 38);

module.exports = {
  toPriorityVal,
};
