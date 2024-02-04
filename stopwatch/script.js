const timerDisplay = document.querySelector('.timerDisplay')
console.log(timerDisplay)
const stopButton = document.querySelector('#stopBtn')
const startButton = document.querySelector('#startBtn')
const resetButton = document.querySelector('#resetBtn')

let msec = 0
let sec = 0
let min = 0
// `null` means that currently there is no value in `timerId`. But in future there will be a some value in the `timerId`.
let timerId = null; 

const startTimer = () => {
 msec++
 if (msec == 100) {
  msec = 0
  sec++
 }
 if (sec == 60) {
  sec = 0
  min++
 }
 /*
 // if...else statement
 let msecString;
 if (msec < 10) {
  msecString = `0${msec}`
 } else {
  msecString = msec
 }
 */
 // Conditional (ternary) operator
 let msecString = msec < 10 ? `0${msec}` : msec
 let secString = sec < 10 ? `0${sec}` : sec
 let minString = min < 10 ? `0${min}` : min

 timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`
}

startButton.addEventListener('click', () => {
  console.log(`Start button clicked`)
  if(timerId !== null) {
    clearInterval(timerId)
  }
  timerId = setInterval(startTimer, 10)
})

stopButton.addEventListener('click', () => {
    clearInterval(timerId)
})

resetButton.addEventListener('click', () => {
  clearInterval(timerId)
  timerDisplay.innerHTML = `00 : 00 : 00`
  msec = sec = min = 0
})


