var loginUsers = JSON.parse(localStorage.getItem("login"));
if (!loginUsers) {
  window.location.replace("../login/login.html");
}

console.log(typeof(loginUsers))

var Fname = document.getElementById("userFname");
Fname.innerText = loginUsers.firstName;

var fullName = document.getElementById("ufname");
fullName.innerText = loginUsers.firstName + " " + loginUsers.lastName;
var userMail = document.getElementById("uename");
userMail.innerText = loginUsers.useremail;
var userCity = document.getElementById("ucname");
userCity.innerText = loginUsers.usercity;
var userGender = document.getElementById("ugname");
userGender.innerText = loginUsers.usergender;

function logOut() {
  localStorage.removeItem("login");
  window.location.replace("../login/login.html");
}
