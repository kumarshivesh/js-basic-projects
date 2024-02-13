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
  const displayBMI = document.querySelector('#display-bmi')
  const displayCategory = document.querySelector('#display-category')

  if (height === '' || height < 0 || isNaN(height)) {
    displayBMI.innerHTML = `Please enter a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    displayBMI.innerHTML = `Please enter a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category
    if (bmi < 18.6) {
      category = 'Under Weight'
    } else if (bmi > 18.6 && bmi < 24.9) {
      category = 'Normal Range'
    } else if (bmi > 24.9 && bmi < 29.9) {
      category = 'Over Weight'
    } else if (bmi > 30) {
      category = 'Obesity'
    }
    //show the result
    displayBMI.innerHTML = `${bmi}`;
    displayCategory.innerHTML = `${category}`
  }
})


