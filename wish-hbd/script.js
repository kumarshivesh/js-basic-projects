import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.querySelector('.btn');
const displayMessage = document.querySelector('.display-message');

const sound = new Audio('happy-birthday-45962.mp3'); 

const messages = ['Happy', 'Birthday', 'Abinaya', 'Damodaran'];

function makeConfetti(){
    confetti()
  }

let currentIndex = 0; // Initialize a counter outside of the click event listener

btn.addEventListener('click', () => {
    // Check if the current message is the birthday message
    if (displayMessage.innerHTML === 'Happy Birthday Abinaya!!! Keep typing and thriving; may this year bring you loads of success and minimal compiler errors!') {
        // Reload the page
        window.location.reload();
    } else {
        // Update the message as before
        displayMessage.innerHTML = '';
        displayMessage.innerHTML += messages[currentIndex] + ' ';

        // Increment the currentIndex by 1
        currentIndex++;

        // Check if all parts of the message have been displayed
        if (currentIndex >= messages.length) {
            // Update to the full birthday message
            displayMessage.innerHTML = 'Happy Birthday Abinaya!!! Keep typing and thriving; may this year bring you loads of success and minimal compiler errors!';
            // makeConfetti();
            setInterval(makeConfetti, 300);
            sound.play(); //Play the sound
        }
    }
});
