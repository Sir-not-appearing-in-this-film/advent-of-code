const { readFile } = require('fs/promises');

const fetchTextDataFromDay = async (day) => {
  const data = await readFile('./2022/' + String(day) + '/input.txt', { encoding: 'utf-8' });

  return data;
};

module.exports = {
  fetchTextDataFromDay
};
