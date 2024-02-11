const displayResult = document.querySelector('#display-result')
const displayAlertMsg = document.querySelector('#display-alert-msg')
const increaseBtn = document.querySelector('.increase')
const resetBtn = document.querySelector('.reset')
const decreaseBtn = document.querySelector('.decrease')

let counter = 0

const increaseTheCount = () => {
  if(counter >= 0){
    console.log('counter >= 0')
    displayAlertMsg.innerHTML = ''
    counter++
    displayResult.innerHTML = `${counter}`
  } else if (counter < 0) {
    console.log('counter < 0')
    counter++
    displayResult.innerHTML = `${counter}`
  }
}

const decreaseTheCount = () => {
  // if(counter > 0) {
  //   displayAlertMsg.innerHTML = ''
  //   counter--
  //   displayResult.innerHTML = `${counter}`
  // } else if (counter < 0) {
  //   displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0'
  //   counter--
  //   displayResult.innerHTML = `${counter}`
  // }

  if (counter === 0) {
    console.log('counter = 0')
    displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0'
  }
  counter--
  displayResult.innerHTML = `${counter}`

  // if (counter === 0) {
  //   displayAlertMsg.innerHTML = ''
  // } else if (counter === -1) {
  //   displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0'
  // }
  // counter--
  // displayResult.innerHTML = `${counter}`

  // if (counter > 0) {
  //   displayAlertMsg.innerHTML = ''; // Clear any previous alert message
  //   counter--;
  //   displayResult.innerHTML = `${counter}`;
  // } else {
  //   // Only display the alert message if the counter is 0 before decrementing
  //   displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0';
  //   counter--;
  //   displayResult.innerHTML = `${counter}`;
  // }

  // if (counter > 0) {
  //   displayAlertMsg.innerHTML = ''; // Clear any previous alert message
  //   counter--;
  //   displayResult.innerHTML = `${counter}`;
  // } else if (counter === 0) { // Check only when counter is exactly 0
  //   displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0';
  // }
  // counter--; // Decrement after displaying the message if needed
  // displayResult.innerHTML = `${counter}`;
}

const resetTheCount = () => {
  displayResult.innerHTML = '0'
  displayAlertMsg.innerHTML = ''
  counter = 0
}

increaseBtn.addEventListener('click', increaseTheCount)
decreaseBtn.addEventListener('click', decreaseTheCount)
resetBtn.addEventListener('click', resetTheCount)




