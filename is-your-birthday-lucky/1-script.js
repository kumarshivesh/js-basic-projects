const dob = document.querySelector('#dob')
const luckyNumber = document.querySelector('#luckyNumber')
const checkButton = document.querySelector('.check-btn')
const displayMessage = document.querySelector('.display-message')
/*
dob.addEventListener('change', (event) => {
  let selectedDate = event.target.value
  console.log(`The selected date is ${selectedDate}`)
})

luckyNumber.addEventListener('change', (event) => {
  let enteredNumber = event.target.value
  console.log(`the entered number is ${enteredNumber}`)
}*/


checkButton.addEventListener('click', () => {
  let selectedDate = dob.value
  let enteredNumber =  parseInt(luckyNumber.value)
  console.log(`The selected date is ${selectedDate} and the entered number is ${enteredNumber}`)
  console.log(typeof(selectedDate))
  let digitsString = selectedDate.replaceAll('-','')
  console.log(digitsString)
  let digitsArray = digitsString.split("")
  console.log(digitsArray)
  const sumOfDigits = digitsArray.reduce((sum, digit) => {
    console.log(`sum: ${sum}, digit: ${digit}`)
    return sum + parseInt(digit)
  },0);
  console.log(`The sum of digits is ${sumOfDigits}`)
  if(enteredNumber === sumOfDigits) {
    console.log(`the entered number is ${enteredNumber} and the sum of digits is ${sumOfDigits}`)
    // console.log('You birthday is lucky')
    displayMessage.innerText = `Your birthday is lucky`
  } else {
    // console.log('You birthday is NOT lucky')
    displayMessage .innerText = `Your birthday is NOT lucky`
  }
})





