//where i write javascript code
$(document).ready(function () {

  $('.box').on('click', combinationFunctions)


function combinationFunctions(){
  var index = ($('.box').index(this))
  console.log(index)
    changeTurnText()
  playTurn(index)
  // inputXO(index)
  console.log(totalMoves)
}

// //
// function inputXO(index) {
// console.log(player)
// console.log($('.box').get(index))
// if (player = 1){
// $('.box').get(index).text('x')
// }
// else {
// $('.box').get(index).text('o')
// }
// }































totalMoves = [0,0,0,0,0,0,0,0,0]
player = 1

function restart() {
totalMoves = [0,0,0,0,0,0,0,0,0]
player = 1
}

function isGameOver() {
  if (whoWon()) {
    return true}
return false
}

function whoWon(){
  if (totalMoves[0] === totalMoves[1] && totalMoves[0] === totalMoves[2] && totalMoves[0]) return totalMoves[0]
  else if (totalMoves[3] === totalMoves[4] && totalMoves[3] === totalMoves[5] && totalMoves[3]) return totalMoves[3]
  else if (totalMoves[6] === totalMoves[7] && totalMoves[6] === totalMoves[8] && totalMoves[6]) return totalMoves[6]
  else if (totalMoves[0] === totalMoves[3] && totalMoves[0] === totalMoves[6] && totalMoves[0]) return totalMoves[0]
  else if (totalMoves[1] === totalMoves[4] && totalMoves[1] === totalMoves[7] && totalMoves[1]) return totalMoves[1]
  else if (totalMoves[2] === totalMoves[5] && totalMoves[2] === totalMoves[8] && totalMoves[2]) return totalMoves[2]
  else if (totalMoves[0] === totalMoves[4] && totalMoves[0] === totalMoves[8] && totalMoves[0]) return totalMoves[0]
  else if (totalMoves[2] === totalMoves[4] && totalMoves[2] === totalMoves[6] && totalMoves[2]) return totalMoves[2]
  else if (totalMoves[0] !==0 && totalMoves[1] !==0 && totalMoves[2] !== 0 && totalMoves[3]!== 0 && totalMoves[4] !== 0 &&
    totalMoves[5] !== 0 && totalMoves[6] !== 0 && totalMoves[7] !== 0 && totalMoves[8] !== 0) return 3
  else return 0
}

function playTurn(moves){
 if (totalMoves[moves] !== 0||isGameOver() && moves >totalMoves.length){
    return false}
 else {
   totalMoves[moves] = player
      if (player===1){player = 2}
      else {player = 1}
   return true}
}



function changeTurnText(){
$('h2').toggle()
}





































})
