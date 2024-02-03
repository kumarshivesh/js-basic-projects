let time = document.querySelector('#time');
let timeFormat = document.querySelector('#time-format');

const showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();


  min = min < 10 ? `0${min}` : min // Format minutes with leading zero if necessary
  sec = sec < 10 ? `0${sec}` : sec // Format seconds with leading zero if necessary

  // Determine AM/PM indicator
  let ampm = hr < 12 ? 'AM' : 'PM';

  // Adjust hour for 12-hour format if necessary
  hr = hr > 12 ? hr - 12 : hr;

  // Format hours with leading zero if necessary
  hr = hr < 10 ? `0${hr}` : hr;

  // Format time string
  time.innerHTML = `${hr} : ${min} : ${sec}`;
  timeFormat.innerHTML = ampm;
};

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showTime, 1000)
})

