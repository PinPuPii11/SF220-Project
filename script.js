const keyBoard = document.getElementById("login")
const keyBoard2 = document.getElementById("form-input")
//var username = ''
//var password = ''

keyBoard.addEventListener('keydown', e =>{
  if(e.keyCode === 13){
    $('.form_input').focus()
  }
})

keyBoard2.addEventListener('keydown', e =>{
  if(e.keyCode === 13){
    $('.form_button').click()
    //$()
  }
})


// ----------------------------------------------------------------------------------------------- //

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message-success", "form_message-error");
  messageElement.classList.add(form_message-${type});
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form_input-error");
  inputElement.parentElement.querySelector("form_input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form_input-error");
  inputElement.parentElement.querySelector("form_input-error-message").textContent = "";
}

// setForMessage(loginForm, "success", "You're logged in!");

document.addEventLister("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");

  document.querySelector("linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });
  loginForm.addEventListen("submit", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setForMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll("form_input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
      if (e.target.id === "login" && e.target.value.length > 0 && e.target.value.length < 10) {
        setInputError(inputElement, "Username must be 10 characters in length");
      }       
    });
    
    inputElement.addEventListener("input", e => {
      clearInputError(inputElement);
    });
  });
});

// โอ้ย ลาก่อน คิดไม่ออก กดวเสกหาดเ่วกสหดาเหกวดเหกดเสา่วสา่วกหดเวสหาืำพรดเดสสา่วสา่เกดดเหกดดเเ - Aikodesu11