let body = document.querySelector('body')
let buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', (event) => {
    let clickedBox = event.target
    console.log(clickedBox)
    if(clickedBox.id === 'grey') {
      body.style.backgroundColor = clickedBox.id
    }  else if(clickedBox.id === 'white') {
      body.style.backgroundColor = clickedBox.id
    } else if(clickedBox.id === 'blue') {
      body.style.backgroundColor = clickedBox.id
    } else if(clickedBox.id === 'yellow') {
      body.style.backgroundColor = clickedBox.id
    }
  })
})

/*
buttons.forEach(function(button){
    button.addEventListener('mouseover', function(event){
        body.style.backgroundColor = button.id;
    })
})
*/