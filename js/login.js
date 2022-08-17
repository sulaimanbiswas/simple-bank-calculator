// step 01: add click event handler with the submit btn

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault(); // off reload page

  // step 02: get the email address inside the email input field.
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // step 03: get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // step 04: verify email and password

  // error Handler
  const errorNotice = document.getElementById("error-notice");
  if (email === "sulaimanbiswasbd@gmail.com" && password === "sulaiman@7462") {
    errorNotice.innerText = "Login Successfully";
    errorNotice.style.color = "green";
    location.href = "bank-dashboard.html";
  } else {
    errorNotice.innerText = "Email address/password do not match";
    errorNotice.style.color = "red";
  }
});
