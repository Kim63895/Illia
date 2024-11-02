const form = document.querySelector("form");
const message = document.getElementById("message");
const nameInput = document.querySelector(".form-control");
const erroMessage = document.querySelectorAll("span");
const fillMassage = document.getElementById("exampleFormControlTextarea1");
const fillTell = document.getElementById("exampleFormControlInput2");
const fillEmail = document.getElementById("exampleFormControlInput3");

const checkName = (regExp, item) => {
  if (regExp.test(nameInput.value)) {
    item.textContent = "";
  } else {
    item.textContent = "This sectioon need to be fill";
    item.style.color = "red";
  }
};

const checkMessage = (regExp, item) => {
  if (regExp.test(fillMassage.value)) {
    item.textContent = "";
  } else {
    item.textContent = "This section need to have at list 5";
    item.style.color = "red";
  }
};

const checkPhoneNumber = (regExp, item) => {
  if (regExp.test(fillTell.value)) {
    item.textContent = "";
  } else {
    item.textContent = "This section need to start '+380' ";
    item.style.color = "red";
  }
};

const checkEmail = (regExp, item) => {
  if (regExp.test(fillEmail.value)) {
    item.textContent = "";
  } else {
    item.textContent = "This section need @ and '.' ";
    item.style.color = "red";
  }
};

const validateValue = () => {
  checkName(/[A-Za-z]+/, erroMessage[0]);
  checkMessage(/.{6}/, erroMessage[1]);
  checkPhoneNumber(/^\+380\d{9}$/, erroMessage[2]);
  checkEmail(/\S+@\S+\.S+/, erroMessage[3]);
};
form.addEventListener("input", validateValue);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = {};
  formData.forEach((value, key) => (formObj[key] = value));
  console.log(formObj);
});
