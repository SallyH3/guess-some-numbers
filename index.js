let minField = document.querySelector('.js-min-input')
let maxField = document.querySelector('.js-max-input')
let updateBtn = document.querySelector('.update-btn')
let minRangeNum = document.querySelector('.min-range-txt')
let maxRangeNum = document.querySelector('.max-range-txt')
let guessInput = document.querySelector('.js-guess')
let submitBtn = document.querySelector('.submit-btn')
let clearBtn = document.querySelector('.clear-btn')
let resetBtn = document.querySelector('.reset-btn')
let rightDisplayNum = document.querySelector('.right-side-num')

resetBtn.addEventListener('click', resetGame)
guessInput.addEventListener('keyup', enableButtons)

function enableButtons () {
  if(guessInput.value !== '') {
    resetBtn.removeAttribute('disabled')
    clearBtn.removeAttribute('disabled')
  }
}

function resetGame (e) {
  e.preventDefault()
  minField.value = ''
  maxField.value = ''
  guessInput.value = ''
}


