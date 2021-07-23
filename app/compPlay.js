const store = require('./store.js')

const gameState = store.game.cells

//  3 moves to first play corner, side, and middle

  //  p1 takes corner, take middle
  //  p1 take opposite corner, take a side
  //  OR p1 take adjacent corner/side, block
  //  OR p1 take opposite side,

// check can comp win this turn ? y:win n: then
// check gameState for need to block player move
// y:blockmove n: then
// check gameState for move that is closest to winning, and rank double threats higher: make that move




//check avaliable moves
// check each move for win
// check each move for block

for (i=0;i++;i<3){
  if( gameState[i])
}
