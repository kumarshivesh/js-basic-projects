const displayResult = document.querySelector('#display-result')
const displayAlertMsg = document.querySelector('#display-alert-msg')
const buttons = document.querySelectorAll('.btn')
console.log(buttons)

let counter = 0

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    console.log(styles)
    if(styles.contains('increase')){
      counter++
    } else if(styles.contains('decrease')){
      counter--
    } else {
      counter = 0
    }
    displayResult.innerHTML = `${counter}`

    if(counter > 0) {
      displayAlertMsg.innerHTML = ''
      displayResult.style.color = 'green'
    } if (counter < 0) {
      displayAlertMsg.innerHTML = 'Check out! The counter is going beyond 0'
      displayAlertMsg.classList.add('alert-red')
      // displayAlertMsg.innerHTML = '<span style="color: red;">Check out! The counter is going beyond 0</span>'
      displayResult.style.color = 'red'
    } else if(counter === 0) {
      displayAlertMsg.innerHTML = ''
      displayResult.style.color = '#3944bc'
    }
  }) 
})

