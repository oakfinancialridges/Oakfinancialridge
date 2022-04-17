var userName = document.getElementById("username");
var password = document.getElementById("password");

var login1 = document.getElementById("login1");

login1.addEventListener('click', auth);

//VALIDATOR..
function auth() {
    if (userName.value == "gl1692830@gmail.com" && password.value == "samuel2020") {
        return true;
    } else {
        alert("Sorry, invalid details..");
        return false;
    }
}