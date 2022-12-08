const { readFile, readdir } = require('fs/promises');
const path = require('path');

const cwd = path.cwd

console.log()

const fetchTextData = async () => {
  const data = await readFile(path.resolve('./2022/5/input.txt'), { encoding: 'utf-8' });

  return data;
};

module.exports = {
  fetchTextData
};

