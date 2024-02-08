const submitBtn = document.getElementById('submitBtn')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')
const form = document.querySelector('form')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  if(validateName() && validateEmail() && validatePassword()) {
    alert('Form Submitted Successfully')
    form.reset() // Reset the form after successful submission

  }
})

const validateName = () => {
  let name = document.getElementById('name').value

  if(name.length == 0) {
    nameError.innerHTML = 'Name is required'
    nameError.previousElementSibling.classList.add('fa-xmark')
    return false // Here, I am using the `return false` becasue we do not want this to go forward. If the validation fails (i.e., the name input is empty), returning false prevents the form from being submitted. This stops the default behavior of form submission, ensuring that the form data is not sent to the server when it's incomplete or invalid.
  }

  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Write full Name"
    nameError.previousElementSibling.classList.add('fa-xmark')
    return false
  }

  nameError.innerHTML = ""
  nameError.previousElementSibling.classList.add('fa-check')

  return true
}

function validateEmail(){
  let email = document.getElementById('email').value;

  if(email.length == 0){
      emailError.innerHTML = "Email is required";
      emailError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }

  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      emailError.innerHTML = "Enter Valid Email";
      emailError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add('fa-check');
  return true;
}
function validatePassword(){
  let password = document.getElementById('password').value;

  if(password.length == 0){
      passError.innerHTML = "Password is required";
      passError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }

  if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
      passError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
      passError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }
  passError.innerHTML = "";
  passError.previousElementSibling.classList.add('fa-check');
  return true;
}

// Make a validateConfirmPassword function to validate it