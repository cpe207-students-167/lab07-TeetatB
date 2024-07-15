// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const pwcInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const Rstbtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}

pwcInput.onkeyup = () => {
  pwcInput.classList.remove("is-valid");
  pwcInput.classList.remove("is-invalid");
}
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  var v = validateEmail(emailInput.value);
  isPasswordOk = false;
  isPwcOk = false;

  // validate first name
  if (firstNameInput.value.length == 0) {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value.length == 0) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

    // validate email
    if (v){
      emailInput.classList.add("is-valid");
    } else {
      emailInput.classList.add("is-invalid");
    }
  
    // validate password
    if (passwordInput.value.length < 6){
      passwordInput.classList.add("is-invalid");
    } else{
      passwordInput.classList.add("is-valid");
      isPasswordOk = true;
    }

    if (pwcInput.value === passwordInput.value){
      pwcInput.classList.add("is-valid");
      isPwcOk = true;
    } else {
      pwcInput.classList.add("is-invalid");
    }

  // validate confirm password

  if (isFirstNameOk && isLastNameOk && isPasswordOk && v &&isPwcOk) alert("Registered successfully");
};

// add callback function for Reset button.
Rstbtn.onclick = () =>{ 
  const ans = document.querySelectorAll(".form-control");
  for(var i = 0;i < ans.length;i++){
    ans[i].value = "";
    ans[i].classList.remove("is-valid");
    ans[i].classList.remove("is-invalid");
  }

}