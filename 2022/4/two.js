const { sectionPairs } = require('./input-pairs');

const getOverlappedSections = (pairs) => {
  let res = 0;
  
  for (let i = 0; i < pairs.length; i++) {
    const [[startOne, endOne], [startTwo, endTwo]] = pairs[i]
      .split(',')
      .map((sectionIds) => sectionIds.split('-')
      .map((str) => Number(str)));
    
    if (
      (endOne >= startTwo && endOne <= endTwo)
      || (endTwo >= startOne && endTwo <= endOne)
    ) res++;
  };
    
  return res;
}

console.log(getOverlappedSections(sectionPairs));
