const totalAvailSpace = 70000000;
const minMemoryRequired = 30000000;
const rootPath = '/';
const directorySizes = [];
const commandPrefixRe = new RegExp(/\$\s(cd|ls)\s{0,}/g);
const changeDirOptsRe = new RegExp(/([a-zA-Z]{1,}|\/|\.{2}){0,}/g);
const commandRe = new RegExp(commandPrefixRe.source + changeDirOptsRe.source);
const sizeThreshold = 100000;

module.exports = {
  totalAvailSpace,
  minMemoryRequired,
  rootPath,
  directorySizes,
  commandRe,
  sizeThreshold,
};
