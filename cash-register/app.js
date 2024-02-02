const billAmount = document.querySelector("#amount");
const givenCash = document.querySelector("#cash");
const checkButton  = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");
const totalNoOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector(".next-btn");
const primaryContainer = document.getElementById("primary-container");
const secondaryContainer = document.getElementById("secondary-container");

const availableNotes = [2000, 500, 100, 20, 10, 1];

const showMessage = (message) => {
  errorMsg.style.display = "block";
  errorMsg.innerHTML = message;
};

const calculateChange = (changeAmount) => {
  for (let i = 0; i < availableNotes.length; i++) {
    // `Math.trunc()` method returns the integer part of a number by removing any fractional digits
    const totalNotes = Math.trunc(changeAmount / availableNotes[i]);
    changeAmount = changeAmount % availableNotes[i];
    totalNoOfNotes[i].innerText = totalNotes;
  }
};

// Hide / Display Toggle
primaryContainer.style.display = "none"
secondaryContainer.style.display = "none"

nextButtonToggle = () => {
  if (primaryContainer.style.display === "none") {
    primaryContainer.style.display = "block";
    console.log(primaryContainer.style.display)
  }
  nextButton.style.display = "none";
  console.log(nextButton.style.display)
};

checkButtonToggle = () => {
  if (secondaryContainer.style.display === "none") {
    secondaryContainer.style.display = "block";
  }
};

const validateAmount = () => {
  errorMsg.style.display = "none";
  if (Number(billAmount.value) > 0) {
    if (Number(givenCash.value) >= Number(billAmount.value)) {
      const amountToBeReturned = givenCash.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Cash Given must be greater or equal to the Bill Amount");
    }
  } else {
    showMessage("Bill Amount must be greater than zero");
  }
};

checkButton.addEventListener("click", validateAmount);
nextButton.addEventListener("click", nextButtonToggle);
checkButton.addEventListener("click", checkButtonToggle); // we can add more that one event listener to an object
