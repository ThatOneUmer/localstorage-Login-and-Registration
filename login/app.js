var loginUsers = JSON.parse(localStorage.getItem("login"));
if (loginUsers) {
  window.location.replace("../dashboard/dashboard.html");
}

var usersData = JSON.parse(localStorage.getItem("Users"));
console.log(usersData);

function searchinguserData(user) {
  for (let i = 0; i < usersData.length; i++) {
    if (
      user.username === usersData[i].username &&
      user.password === usersData[i].password
    ) {
      return usersData[i];
    }
  }
}

function submitData(e) {
  e.preventDefault();
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;
  var error = document.getElementsByClassName("error");

  var loginUser = searchinguserData({ username: userName, password: passWord });

  if (loginUser) {
    console.log(loginUser);
    localStorage.setItem("login", JSON.stringify(loginUser));
    window.location.replace("../dashboard/dashboard.html");
  } else {
    error[0].style.display = "block";
    error[0].innerText = "wrong credentials";
    error[1].style.display = "block";
    error[1].innerText = "wrong credentials";
  }
}
