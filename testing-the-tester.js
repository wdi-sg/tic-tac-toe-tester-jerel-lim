// where i write javascript code
$(document).ready(function () {
  $('.box').on('click', combinationFunctions)

  function combinationFunctions () {
    var index = ($('.box').index(this))
    console.log(index)
    changeTurnText()
    console.log('player is ' + player)
    if (player === 1) {
      $(this).html('x')
    } else {
      $(this).html('o')
    }
    playTurn(index)
    isGameOver()
  }

  var totalMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  var player = 1

  function restart () {
    totalMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    player = 1
    $('.box').html('')
  }

  function isGameOver () {
    console.log('gameover was called')
    if (whoWon()) {
      restart()
      return true
    }
    return false
  }

  function whoWon () {
    console.log('whoWon was called')
    if (totalMoves[0] === totalMoves[1] && totalMoves[0] === totalMoves[2] && totalMoves[0]) {
      alert(totalMoves[0] + 'won')
      return totalMoves[0]
    } else if (totalMoves[3] === totalMoves[4] && totalMoves[3] === totalMoves[5] && totalMoves[3]) {
      alert(totalMoves[3] + 'won')
      return totalMoves[3]
    } else if (totalMoves[6] === totalMoves[7] && totalMoves[6] === totalMoves[8] && totalMoves[6]) {
      alert(totalMoves[6] + 'won')
      return totalMoves[6]
    } else if (totalMoves[0] === totalMoves[3] && totalMoves[0] === totalMoves[6] && totalMoves[0]) {
      alert(totalMoves[0] + 'won')
      return totalMoves[0]
    } else if (totalMoves[1] === totalMoves[4] && totalMoves[1] === totalMoves[7] && totalMoves[1]) {
      alert(totalMoves[1] + 'won')
      return totalMoves[1]
    } else if (totalMoves[2] === totalMoves[5] && totalMoves[2] === totalMoves[8] && totalMoves[2]) {
      alert(totalMoves[2] + 'won')
      return totalMoves[2]
    } else if (totalMoves[0] === totalMoves[4] && totalMoves[0] === totalMoves[8] && totalMoves[0]) {
      alert(totalMoves[0] + 'won')
      return totalMoves[0]
    } else if (totalMoves[2] === totalMoves[4] && totalMoves[2] === totalMoves[6] && totalMoves[2]) {
      alert(totalMoves[2] + 'won')
      return totalMoves[2]
    } else if (totalMoves[0] !== 0 && totalMoves[1] !== 0 && totalMoves[2] !== 0 && totalMoves[3] !== 0 && totalMoves[4] !== 0 &&
    totalMoves[5] !== 0 && totalMoves[6] !== 0 && totalMoves[7] !== 0 && totalMoves[8] !== 0) {
      alert('it is a draw')
      return 3
    } else return 0
  }

  function playTurn (moves) {
    if (totalMoves[moves] !== 0 || isGameOver() && moves > totalMoves.length) {
      return false
    } else {
      totalMoves[moves] = player
      if (player === 1) { player = 2 } else { player = 1 }
      return true
    }
  }

  function changeTurnText () {
    $('h2').toggle()
  }
})
