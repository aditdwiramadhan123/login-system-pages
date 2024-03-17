var username = document.getElementById("username");
var labelUsername = document.getElementById("labelUsername");
var password = document.getElementById("password");
var labelPassword = document.getElementById("labelPassword");
var h2 = document.getElementById("h2")

//  yang terjadi ketika username tidak diklik
function usernameNotOnClick() {
  var valueUsername = username.value;
  console.log(valueUsername);
  if (valueUsername != "") {
    //
    console.log("tidak kosong");
  } else {
    console.log("kosong");
    labelUsername.classList.remove("onClick");
    h2.classList.remove("h2_onclick")
  }
}

//  yang terjadi ketika password tidak diklik
function passwordNotOnClick() {
  var valuePassword = password.value;
  if (valuePassword == "") {
    labelPassword.classList.remove("onClick");
  }
}

// yang terjadi ketika username diklik
function usernameOnClick() {
  labelUsername.classList.add("onClick");
  h2.classList.add("h2_onclick")
  var valueUsername = username.value;
  console.log("klik");
  console.log(valueUsername);
}

// yang terjadi ketika password diklik
function passwordOnClick() {
  labelPassword.classList.add("onClick");
}

function usarnameChange() {
  username.style.backgroundColor = "black";
}

// event yang mentriger onClick
username.addEventListener("focus", usernameOnClick);
password.addEventListener("focus", passwordOnClick);

// event yang mentriger NotOnClick ()
password.addEventListener("blur", passwordNotOnClick);
username.addEventListener("blur", usernameNotOnClick);
