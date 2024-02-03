let time = document.querySelector('#time')
let timeFormat = document.querySelector('#time-format')

const showTime = () => {
  let date = new Date()
  // console.log(date)
  let hr = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  // console.log(`Hour: ${hr}, Minute: ${min}, Second: ${sec}`)
  
  hr < 10 ? hr = `0${hr}` : `${hr}`
  min < 10 ? min = `0${min}` : `${min}`
  sec < 10 ? sec = `0${sec}` : `${sec}`
  time.innerHTML = `${hr} : ${min} : ${sec}`

  timeFormat.innerHTML = hr > 12 ? 'PM' : 'AM'
  
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showTime, 1000)
})

