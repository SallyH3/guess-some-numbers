let randomNum;
let minField = document.querySelector('.js-min-input')
let maxField = document.querySelector('.js-max-input')
let updateBtn = document.querySelector('.update-btn')
let guessInput = document.querySelector('.js-guess')
let submitBtn = document.querySelector('.submit-btn')
let clearBtn = document.querySelector('.clear-btn')
let resetBtn = document.querySelector('.reset-btn')
let rightDisplayNum = document.querySelector('.right-side-num')
let message = document.querySelector('.error-message')

resetBtn.addEventListener('click', resetGame)
guessInput.addEventListener('keyup', enableButtons)
updateBtn.addEventListener('click', updateValues)
updateBtn.addEventListener('click', checkUserRange)
submitBtn.addEventListener('click', getUserGuess)

function enableButtons () {
  if(guessInput.value !== '') {
    resetBtn.removeAttribute('disabled')
    resetBtn.style.color = '#e91b0d'
    clearBtn.removeAttribute('disabled')
    clearBtn.style.color = '#e91b0d'
  }
}

function resetGame (e) {
  e.preventDefault()
  minField.value = ''
  maxField.value = ''
  guessInput.value = ''
  minRangeNum.innerText = 1
  maxRangeNum.innerText = 100
  randomNum = Math.floor(Math.random() * 100) + 1
}

function updateValues (e) {
  e.preventDefault()
  var minVal = parseInt(minField.value, 10)
  var maxVal = parseInt(maxField.value, 10)
  randomNum = Math.floor(Math.random() * maxVal) + minVal
  console.log(randomNum)
  populateRangeText()
  handleErrorMsg()
}

function populateRangeText () {
  let minRangeNum = document.querySelector('.min-range-txt').innerText = minField.value
  let maxRangeNum = document.querySelector('.max-range-txt').innerText = maxField.value
}

function handleErrorMsg () {
  if(minField.value === '') {
    document.querySelector('.min-error-msg').innerHTML = `Please enter a min range`
    minField.style.border = '2px solid #e91b0d'
  }
  if(maxField.value === '') {
    document.querySelector('.max-error-msg').innerHTML = `Please enter a max range`
    maxField.style.border = '2px solid #e91b0d'
  }
}

function checkUserRange () {
  let minNumField = parseInt(minField.value)
  let maxNumField = parseInt(maxField.value)
  if(minNumField > maxNumField || maxNumField < minNumField) {
    return message.innerText = 'Please try again'
  }
}

function getUserGuess (e) {
  e.preventDefault()
  let currentGuess = parseInt(guessInput.value, 10)
  let numDisplay = document.querySelector('.right-side-num')
  let minValue = parseInt(minField.value)
  let maxValue = parseInt(maxField.value)
  numDisplay.innerText = currentGuess
  if(currentGuess < minValue || currentGuess > maxValue) {
    return message.innerText = 'You\'re outside of the range, please try again'
  } else if (currentGuess < randomNum) {
    return message.innerText = 'That\'s too low, try again'
  } else if (currentGuess > randomNum) {
    return message.innerText = 'That\'s too high, try again'
  } else if (currentGuess === randomNum) {
    return message.innerText = 'Yahoo! You won!'
  } else {
    return message.innerText = 'Enter a guess'
  }
}