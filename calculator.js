// if(firstNum||secondNum !==Number) "Invalid Operation"
// if (Operator !== +-/*) "Invalid Operation"
document.addEventListener('DOMContentLoaded', function () {
  function calculate () {
    var inputFirstNum = document.body.querySelector('input')
    var firstNum = inputFirstNum.value
    console.log(firstNum)

    var inputSecondNum = document.body.querySelectorAll('input')
    var secondNum = inputSecondNum[2].value
    console.log(typeof (secondNum))

    var inputOperator = document.body.querySelectorAll('input')
    var operator = inputOperator[1].value
    console.log(typeof (operator))

    console.log(typeof ('+'))
    var results = ''

    if (isNaN(parseInt(firstNum)) || isNaN(parseInt(secondNum))) {
      results = 'Invalid Operation'
    } else if (operator === '+') {
      results = parseInt(firstNum) + parseInt(secondNum)
    } else if (operator === '-') {
      results = parseInt(firstNum) - parseInt(secondNum)
    } else if (operator === '*') {
      results = parseInt(firstNum) * parseInt(secondNum)
    } else if (operator === '/') {
      results = parseInt(firstNum) / parseInt(secondNum)
    } else {
      results = 'Invalid Operation'
    }
    console.log(results)
    document.body.querySelector('h2').innerHTML = 'Results: ' + results
  }

  button.addEventListener('click', calculate)
})
