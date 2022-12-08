const { rounds } = require('./rounds');

/**
 * A = Rock
 * B = Paper
 * C = Scissors
 * 
 * X => lose
 * Y => draw
 * Z => win
 * 
 * outcomeScores
 * 
 * (B, X) => ((X) => 0) + ((ind) - ((x) => 1)) => 1
 * 
 */

const shapeList = ['A', 'B', 'C'];
const desiredOutcomeList = ['Y', 'X', 'Z'];

const shapeMap = {
  A: 'X',
  B: 'Y',
  C: 'Z',
};

const shapeScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const outcomeScore = (opponentShape, desiredOutcome) => {
  let ind = shapeList.indexOf(opponentShape) - desiredOutcomeList.indexOf(desiredOutcome);

  if (ind < 0) ind = shapeList.length - Math.abs(0 - ind);

  const shapeScore = shapeScores[shapeMap[shapeList[ind]]];

  if (desiredOutcome === 'Z') return 6 + shapeScore;
  if (desiredOutcome === 'Y') return 3 + shapeScore;
  return shapeScore;
};

const outcomesFromRounds = (r) => {
  let res = 0;
  for (let i = 0; i < r.length; i++) {
    const [opponentShape, desiredOutcome] = r[i];
    res += outcomeScore(opponentShape, desiredOutcome);
  }
  return res;
}

console.log(outcomesFromRounds(rounds));
