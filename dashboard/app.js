var loginUsers = JSON.parse(localStorage.getItem("login"));
if (!loginUsers) {
  window.location.replace("../login/login.html");
}

var Fname = document.getElementById("userFname");
var fullName = document.getElementById("ufname");
var userMail = document.getElementById("uename");
var userCity = document.getElementById("ucname");
var userGender = document.getElementById("ugname");
Fname.innerText = loginUsers.firstName;
fullName.innerText = loginUsers.firstName + " " + loginUsers.lastName;
userMail.innerText = loginUsers.useremail;
userCity.innerText = loginUsers.usercity;
userGender.innerText = loginUsers.usergender;

function auTo() {
  for (let i = 0; i < loginUsers.length; i++) {
    Fname.innerText = loginUsers[i].firstName;
    fullName.innerText = loginUsers[i].firstName + " " + loginUsers[i].lastName;
    userMail.innerText = loginUsers[i].useremail;
    userCity.innerText = loginUsers[i].usercity;
    userGender.innerText = loginUsers[i].usergender;
  }
}
auTo();

function logOut() {
  localStorage.removeItem("login");
  window.location.replace("../login/login.html");
}
