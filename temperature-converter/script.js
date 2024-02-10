const mainContainer = document.querySelector('#main-container')
const inputTemp = document.querySelector('#input-temp')
const tempType = document.querySelector('#temp-type')
const submitButton = document.querySelector('#submit-button')
const resetButton = document.querySelector('#reset-button')
const errorMessage = document.querySelector('#error-message')
const displayResult = document.querySelector('#display-result')

const convertTemp = () => {
 if(validateInput()) {
  if(tempType.value === 'Celsius (°C)') {
    celsius = inputTemp.value
    faharenheit = celsius * 9/5 + 32
    displayResult.innerHTML = `${celsius} Celsius (°C) = ${faharenheit} Fahrenheit (°F)`
  } else if (tempType.value === 'Fahrenheit (°F)') {
    faharenheit = inputTemp.value
    celsius = (faharenheit - 32) * (5/9)
    displayResult.innerHTML = `${faharenheit} Fahrenheit (°F) = ${celsius} Celsius (°C)`
  }
 }
}

const reset = () => {
  if(validateInput()) {
    inputTemp.value = ''
    tempType.value = 'Celsius (°C)'
    displayResult.innerHTML = ''
  } else {
    errorMessage.innerHTML = ''
  }
  
}

const validateInput = () => {
  if (inputTemp.value.length == 0) {
    errorMessage.innerHTML = 'Enter the temperature'
    return false; // Indicates validation failure
  }
  return true; // Indicates validation success
}

submitButton.addEventListener('click', convertTemp)
resetButton.addEventListener('click', reset)
