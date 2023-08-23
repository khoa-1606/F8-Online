const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})


//Hàm để toggle hiển thị mật khẩu
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  
  

// const password = document.getElementById("password");
// const showPassword = document.getElementById("show_password");

// showPassword.addEventListener("click", function() {
//   if (showPassword.checked) {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// });

// function showPassword() {
//     var password = document.getElementById("password");
//     var showPassword = document.getElementById("show_password");
//     if (showPassword.checked) {
//       password.type = "text";
//     } else {
//       password.type = "password";
//     }
// }