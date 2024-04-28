import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const enteredNumber = document.querySelector('.entered-number');
const form = document.querySelector('.form');
const tableContainer = document.querySelector('.table-container');
const evaluateBtn = document.querySelector('.evaluate-btn');
const displayResult = document.querySelector('.display-result')
const resetBtn = document.querySelector('.reset-btn');
const popMessage = document.querySelector('.pop-message');
const popCloseBtn = document.querySelector('.pop-close-btn')

const sound = new Audio('./audio/small-applause-6695.mp3'); 

// Function to generate a blank multiplication table
const generateBlankTable = (number) => {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `<li>${number} X ${i} = <input class="answer-input" data-answer="${number * i}" /><span class="result-icon"></span></li>`;
  }
  return table;
}

const makeConfetti = () => {
  confetti()
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const resultTable = generateBlankTable(enteredNumber.value);
  tableContainer.innerHTML = resultTable;
  evaluateBtn.style.display = 'block'
});

// Event listener for evaluating the table
evaluateBtn.addEventListener('click', () => {
  const answerInputs = document.querySelectorAll('.answer-input');
  answerInputs.forEach(input => {
    const userAnswer = parseInt(input.value);
    const correctAnswer = parseInt(input.dataset.answer);
    const resultIcon = input.nextElementSibling; // Select the span element next to the input
    if (!isNaN(userAnswer)) {
      if (userAnswer === correctAnswer) {
        input.classList.add('correct-answer');
        resultIcon.innerHTML = '<i class="fas fa-check-circle"></i>'; // Insert check mark icon
        resultIcon.style.color = 'green'
      } else {
        input.classList.add('wrong-answer');
        resultIcon.innerHTML = '<i class="fas fa-times-circle"></i>'; // Insert cross mark icon
        resultIcon.style.color = 'red'
      }
    }
  });

  const correctAnswerInputs = document.querySelectorAll('.correct-answer');
  const wrongAnswerInputs = document.querySelectorAll('.wrong-answer');

  displayResult.innerHTML = `Number of correct answers: <span style="color: green;">${correctAnswerInputs.length}<span> out of 10`;
  resetBtn.style.display = 'block';
  if (correctAnswerInputs.length === 10) {
    openPopup()
  }
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  location.reload(); // Reload the page
});

//
const openPopup = () => {
  popMessage.innerHTML = `
    <h1>🎊🎉<span>Congratulation</span>🎉🎊</h1>
    <p>You scorced 10 out of 10<p>
  `
  popMessage.parentElement.style.display = 'block'
  makeConfetti()
  sound.play(); //Play the sound
}

popCloseBtn.addEventListener('click', ()=> {
  popMessage.parentElement.style.display = 'none'
})
