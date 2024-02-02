let form = document.querySelector('form')
/*
// If you select the value of these input fields here then it will take the empty 
const heightInCM = parseInt(document.querySelector('#height').value)
const weightInKG = parseInt(document.querySelector('#weight').value)
*/

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category
    if (bmi < 18.6) {
      category = 'Under Weight'
    } else if (bmi > 18.6 && bmi < 24.9) {
      category = 'Normal Range'
    } else if (bmi > 24.9) {
      category = 'Over Weight'
    }
    //show the result
    results.innerHTML = `<span>${bmi}</span> <br/> <span>${category}</span>`;
  }
})


