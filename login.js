function loginValidate() {
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === "" || password === "") {
    alert("All fields are required");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter valid email");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  alert("Login successful ✅");
  return true;
}
