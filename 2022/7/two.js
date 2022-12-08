const { fetchTextDataFromDay } = require('../utils/loadInputStr');
const { 
  totalAvailSpace,
  minMemoryRequired,
  rootPath,
  directorySizes,
  commandRe,
} = require('./contants');

class TreeNode {
  constructor(parent, value) {
    this._children = {};
    this.parent = parent;
    this._value = value;
  }

  get dirs() {
    return {
      ...this.children,
      '..': this.parent,
    };
  }

  get children() {
    return this._children;
  }

  get value() {
    return this._value;
  }

  get content() {
    return Object.keys(this.children);
  }

  calcDirectorySize(treeNode = this) {    
    if (treeNode.value) return treeNode.value;
    const recursiveAmt = treeNode.content.reduce((acc, curr) => acc + this.calcDirectorySize(treeNode.children[curr]), 0);
    directorySizes.push(recursiveAmt);
    return recursiveAmt;
  }

  addNode(k, treeNode) {
    this._children = {
      ...this.children,
      [k]: treeNode,
    };
  }
}

const printSumDirectoriesInThreshold = async () => {
  const data = await fetchTextDataFromDay(7);
  const commandOutputLines = data.split('\n');
  const rootNode = new TreeNode();
  let currNode = rootNode;
  
  for (let i = 0; i < commandOutputLines.length; i++) {
    const printedCommand = commandOutputLines[i].match(commandRe);
    if (printedCommand) {
      const [,, target] = printedCommand;
      if (target) currNode = (target.trim() === rootPath) ? rootNode : currNode.dirs[target.trim()];
      continue;
    }
    const [sizeStr, nameStr] = commandOutputLines[i].split(' ');
    if (currNode.children.hasOwnProperty(nameStr)) continue;
    const newNode = sizeStr === 'dir' ? new TreeNode(currNode) : new TreeNode(currNode, Number(sizeStr));
    currNode.addNode(nameStr, newNode);
  }
  const rootDirSize = rootNode.calcDirectorySize();
  const freeSpace = (totalAvailSpace - rootDirSize);
  const targetSize = minMemoryRequired - freeSpace;
  console.log(Math.min(...directorySizes.filter((dSize) => dSize >= targetSize)));
};

printSumDirectoriesInThreshold();
