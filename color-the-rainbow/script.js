let body = document.querySelector('body')
console.log(body)
let semicircles = document.querySelectorAll('.semicircle')
console.log(semicircles)
/*
What is the maximum limit of RGB?
RGB Color Values:
Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255. This means that there are 256 x 256 x 256 = 16777216 possible colors!
*/

// `Math.random()` generates a random decimal number between 0 (inclusive) and 1 (exclusive). By multiplying it with 256 and using `Math.floor()`, you ensure that the result is an integer between 0 and 255.


//function to generate random color
function getRandomColor() {
  let r_value = Math.floor(Math.random() * 256)
  let g_value = Math.floor(Math.random() * 256)
  let b_value = Math.floor(Math.random() * 256)
  let randomColor = `rgb(${r_value}, ${g_value}, ${b_value})`
  console.log('The Box Color is: ', randomColor)
  return randomColor
}

/*
//semicircles will get colored on refreshing the page
semicircles.forEach((event) => {
  event.style.backgroundColor = getRandomColor()
})
*/


// semicircle color will get changed on clicking on it
semicircles.forEach((semicircle) => {
  semicircle.addEventListener('click', (event) => {
    let clickedSemicircle = event.target
    clickedSemicircle.style.backgroundColor = getRandomColor()
  })
})
