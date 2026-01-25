function registerValidate() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // EMPTY CHECK
  if (name === "" || email === "" || password === "" || confirm === "") {
    alert("All fields are required");
    return false;
  }

  // NAME LENGTH
  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }

  // EMAIL VALIDATION
  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address");
    return false;
  }

  // PASSWORD LENGTH
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  // PASSWORD MATCH
  if (password !== confirm) {
    alert("Passwords do not match");
    return false;
  }

  alert("Registration successful ✅");
  return true;
}
