const { rounds } = require('./rounds');

/**
 * A = Rock
 * B = Paper
 * C = Scissors
 * 
 * X = Rock => 1
 * Y = Paper => 2
 * Z = Scissors => 3
 * 
 * win => (shape === winningMap[opponentShape]) => 6
 * draw => (shape === shapeMap[opponentShape]) => 3
 * lose =>  0
 * 
 * outcome = (shape, opponentShape) => 
 * 
 * score = outcome + shape
 * 
 * 
 * (A, Y) => ((Y === winningMap['A']) => 6) + ((shapeScores['Y']) => 2) = 8
 * 
 */

const shapeMap = {
  A: 'X',
  B: 'Y',
  C: 'Z',
};

const winningMap = {
  A: 'Y',
  B: 'Z',
  C: 'X',
};

const shapeScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const outcome = (opponentShape, shape) => {
  if (shape === winningMap[opponentShape]) return 6;
  if (shape === shapeMap[opponentShape]) return 3;
  return 0;
};

const outcomesFromRounds = (r) => {
  let res = 0;
  for (let i = 0; i < r.length; i++) {
    const [opponentShape, shape] = r[i];
    res += outcome(opponentShape, shape) + shapeScores[shape];
  }
  return res;
}

console.log(outcomesFromRounds(rounds));
