const { sectionPairs } = require('./input-pairs');

const getContainedSections = (pairs) => {
  let res = 0;
  
  for (let i = 0; i < pairs.length; i++) {
    const [[startOne, endOne], [startTwo, endTwo]] = pairs[i]
      .split(',')
      .map((sectionIds) => sectionIds.split('-')
      .map((str) => Number(str)));
    
    if (
      startOne <= startTwo && endOne >= endTwo
      || startTwo <= startOne && endTwo >= endOne
      ) res++;
  };
    
  return res;
}

console.log(getContainedSections(sectionPairs));
