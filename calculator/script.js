/*
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
//  Using `Array.from()` method to convert a NodeList (i.e., `buttons`) to an array (i.e., `buttonsArray`)
let buttonsArray = Array.from(buttons);
buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") { //calculate
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") { // clear the input field
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") { // delete the last digit from the input field
      // Syntax of `substring()`: string.substring(indexStart, indexEnd)
      string = string.substring(0, string.length - 1); 
      input.value = string;
    } else {                                 // append the input digits to show in the input field
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
*/

/*
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
//  Using `Spread Operator` method to convert a NodeList (i.e., `buttons`) to an array (i.e., `buttonsArray`)
let buttonsArray = [...buttons];
buttonsArray.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
*/

/*
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let string = "";
// Directly applying the `forEach()` method on the NodeList (i.e., `buttons`) without convering it in an array
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
*/

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(e) {
  const buttonText = e.target.innerHTML;

  switch (buttonText) {
    case "=":
      calculate();
      break;
    case "AC":
      clearDisplay();
      break;
    case "DEL":
      deleteLastDigit();
      break;
    default:
      appendToDisplay(buttonText);
  }
}

function calculate() {
  try {
    string = eval(string);
    input.value = string;
  } catch (error) {
    input.value = "Error";
  }
}

function clearDisplay() {
  string = "";
  input.value = string;
}

function deleteLastDigit() {
  string = string.substring(0, string.length - 1);
  input.value = string;
}

function appendToDisplay(value) {
  string += value;
  input.value = string;
}
