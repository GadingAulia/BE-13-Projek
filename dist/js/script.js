const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

//Get All Value
let sendBtn = document.getElementById("submit-form");
let forms = document.getElementById("forms");

//Form Refresh State
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Now Start SendBtn
sendBtn.addEventListener("click", (e) => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  //Set Value And LocalStorage

  email = email.value;
  localStorage.setItem("email", email);

  password = password.value;
  localStorage.setItem("password", password);
});

function isNumber(string) {
  if (!isNaN(string)) {
    return true;
  } else {
    return false;
  }
}

function checkboxIsChecked() {
  if (document.getElementById("status").checked == true) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(objek) {
  if (objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}
