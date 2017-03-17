//where i write javascript code
possibleMoves = [0,1,2,3,4,5,6,7,8]
totalMoves = []

function restart() {



}

function isGameOver() {
  return false
}

// (totalMoves.length%2 === 1) {
//   totalMoves = []
//   return 1

function whoWon(){
  if (totalMoves.length === 0) {
    totalMoves = []
    return 0
  }
  else if (totalMoves.length === 9) {
    totalMoves = []
    return 3
  }
  else if (totalMoves.length%2 === 1) {
    totalMoves = []
    return 1
  }
    else {
    totalMoves = []
    return 2
  }
}

function playTurn(moves){
 if (possibleMoves.includes(moves) && !totalMoves.includes(moves)) {
   totalMoves.push(moves)
   return true}
else {
  return false
  }
}
