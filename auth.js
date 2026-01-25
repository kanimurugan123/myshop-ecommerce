function register() {
  let user = {
    email: email.value,
    pass: pass.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered Successfully");
}

function login() {
  let user = JSON.parse(localStorage.getItem("user"));
  if(user && user.email === email.value && user.pass === pass.value){
    alert("Login Success");
  } else {
    alert("Invalid Credentials");
  }
}
