var loginUsers = JSON.parse(localStorage.getItem("login"));
if (loginUsers) {
  window.location.replace("./dashboard/dashboard.html");
}

// getting ids.
var userFirstname = document.getElementById("Fname");
var userLastname = document.getElementById("Lname");
var userName = document.getElementById("username");
var userPassword = document.getElementById("password");
var userEmail = document.getElementById("email");
var userGender = document.getElementsByName("gender");
var userCity = document.getElementById("userCity");
var emError = document.getElementsByClassName("emailError")[0];
var heaDing = document.getElementById("heading");
var errorr = document.getElementsByClassName("er-2")[0];

function getUserData() {
  return JSON.parse(localStorage.getItem("Users"));
}

function setUsersData(udata) {
  localStorage.setItem("Users", JSON.stringify(udata));
}

function setLoginData(ldata) {
  localStorage.setItem("login", JSON.stringify(ldata));
}

var userRegData = getUserData() ? [...getUserData()] : [];
var loginUsers = getUserData() ? [] : [];

// Validations start
function unValid(uname) {
  if (uname.target.value.length < 5) {
    uname.target.nextElementSibling.innerText = "atleast 5 char required";
    uname.target.nextElementSibling.style.display = "block";
    return;
  }

  uname.target.nextElementSibling.style.display = "none";
}

function upValid(upw) {
  if (upw.target.value.length < 8) {
    upw.target.nextElementSibling.innerText = "Atleast 8 char required";
    upw.target.nextElementSibling.style.display = "block";
    return;
  }

  upw.target.nextElementSibling.style.display = "none";
}

function ueValid(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.target.value)) {
    mail.target.nextElementSibling.style.display = "none";
    return;
  } else {
    mail.target.nextElementSibling.style.display = "block";
    mail.target.nextElementSibling.innerText = "Invalid Email Address";
  }
}
// Validations End

function usergenderChecker() {
  for (var i = 0; i < userGender.length; i++) {
    if (userGender[i].checked == true) {
      return userGender[i].value;
    }
  }
}

function userCitychecker() {
  if (userCity.selectedIndex !== 0) {
    return userCity.value;
  }
}

function submitData(e) {
  e.preventDefault();
  for (let i = 0; i < userRegData.length; i++) {
    if (userEmail.value === userRegData[i].useremail) {
      emError.style.display = "block";
      emError.innerText = "Email already exist";
      return;
    }
  }
  if (userCity.selectedIndex === 0) {
    errorr.style.display = "block";
    errorr.innerText = "Please select your city";
    return;
  }
  emError.style.display = "none";

  userRegData = [
    ...userRegData,
    {
      firstName: userFirstname.value,
      lastName: userLastname.value,
      username: userName.value,
      useremail: userEmail.value,
      password: userPassword.value,
      usergender: usergenderChecker(),
      usercity: userCitychecker(),
    },
  ];

  loginUsers = [
    {
      firstName: userFirstname.value,
      lastName: userLastname.value,
      username: userName.value,
      useremail: userEmail.value,
      password: userPassword.value,
      usergender: usergenderChecker(),
      usercity: userCitychecker(),
    },
  ];
  setUsersData(userRegData);
  setLoginData(loginUsers);
  window.location.replace("./dashboard/dashboard.html");
}
