const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const mins = document.querySelector('#mins')
const secs = document.querySelector('#secs')

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time
}

const updateCountDown = (deadline) => {
  const currentTime = new Date()
  const timeDifference = deadline - currentTime //milliseconds
  // console.log(timeDifference)
  // calculate days, hours, mins, secs from `timeDifference`
  let calcSecs = Math.floor(timeDifference/1000) % 60
  let calcMins = Math.floor(timeDifference/1000/60) % 60
  let calcHours = Math.floor(timeDifference/1000/60/60) % 24
  let calcDays = Math.floor(timeDifference/1000/60/60/24) 
  // console.log(calcDays)

  days.textContent = formatTime(calcDays)
  mins.textContent = formatTime(calcMins)
  hours.textContent = formatTime(calcHours)
  secs.textContent = formatTime(calcSecs)
}

const countDwon = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000)
}

const targetDate = new Date("January 01 2025 00:00")
countDwon(targetDate)
