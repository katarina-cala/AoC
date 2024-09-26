const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/input2.txt`);
const moves = data
  .toString()
  .split("\r\n")
  .map((data) => data.split(" "));
console.log(moves);

//PART 1
/* 
  A(rock) 1point
  B(paper) 2points
  C(scissors) 3points

  X(rock) 1point
  Y(paper) 2points
  Z(scissors) 3points

  win = 6points
  draw = 3points
  lose = 0points
*/
/* const basicPoints = {X: 1, Y: 2, Z: 3,
};

const winningCombination = {A: "Y", B: "Z", C: "X",
};

const drawCombination = {A: "X", B: "Y", C: "Z",
};

let totalScoreMe = 0;

moves.map((array) => {
  console.log(array);

  const elf = array[0];
  const me = array[1];
  console.log(me);

  totalScoreMe += basicPoints[me];

  if (winningCombination[elf] === me) {
    console.log(winningCombination[elf], me);
    totalScoreMe += 6;
  } else if (drawCombination[elf] === me) {
    totalScoreMe += 3;
  } else {
    totalScoreMe += 0;
  }
});
console.log(totalScoreMe); */

//PART 2
/* 
  X: lose / 0points
  Y: draw / 3points
  Z: win / 6points
*/

const basicPoints2 = { A: 1, B: 2, C: 3 };

const outcomePoints = { X: 0, Y: 3, Z: 6 };

const gameCombination = {
  A: {
    X: "C",
    Y: "A",
    Z: "B",
  },
  B: {
    X: "A",
    Y: "B",
    Z: "C",
  },
  C: {
    X: "B",
    Y: "C",
    Z: "A",
  },
};

let totalScoreMe2 = 0;
moves.map((array) => {
  const elf = array[0];
  const me = array[1];

  const myMove = gameCombination[elf][me];

  totalScoreMe2 = totalScoreMe2 + basicPoints2[myMove];
  totalScoreMe2 = totalScoreMe2 + outcomePoints[me];
});
console.log(totalScoreMe2);
