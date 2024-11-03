const form = document.querySelector("form");
const nameInput = document.querySelector(".form-control");
const errorMessage = document.querySelectorAll("span");
const fillMessage = document.getElementById("exampleFormControlTextarea1");
const fillPhone = document.getElementById("exampleFormControlInput2");
const fillEmail = document.getElementById("exampleFormControlInput3");

const validateField = (input, regExp, errorMgElement, errorMessage) => {
  if (regExp.test(input.value)) {
    errorMgElement.textContent = ""; 
  } else {
    errorMgElement.textContent = errorMessage; 
    errorMgElement.style.color = "red";
  }
};

const validateForm = () => {
  validateField(nameInput, /^[A-Za-z\s]+$/, errorMessage[0], "This section needs to be filled with letters only.");
  validateField(fillMessage, /^.{5,}$/, errorMessage[1], "This section needs at least 5 characters.");
  validateField(fillPhone, /^\+380\d{9}$/, errorMessage[2], "This section needs to start with '+380' and have 9 digits.");
  validateField(fillEmail,  /\S+@\S+\.\S+/, errorMessage[3], "This section needs a valid email format with '@' and '.'.");
};

form.addEventListener("input", validateForm);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = {};
  formData.forEach((value, key) => (formObj[key] = value));
  console.log(formObj); 
});