function login() {
  var eml = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (eml == "") {
    alert("please enter user name.");
  } else if (pwd == "") {
    alert("enter the password");
  } else if (!filter.test(eml)) {
    alert("Enter valid email id.");
  } else if (!re.test(pwd)) {
    alert("Enter valid pass");
  } else {
    alert("logged in");
    sessionStorage.setItem("emailId", eml);

    window.location = "./page2.html";
  }
}
