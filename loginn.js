document.querySelector(".chat-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop the default form submission
  
    // Clear previous errors
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
  
    let hasError = false;
  
    if (name === "") {
      document.getElementById("name-error").textContent = "Name is required!";
      hasError = true;
    }
  
    if (email === "") {
      document.getElementById("email-error").textContent = "Email is required!";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("email-error").textContent = "Enter a valid email!";
      hasError = true;
    }
  
    if (password === "") {
      document.getElementById("password-error").textContent = "Password is required!";
      hasError = true;
    }
  
    if (!hasError) {
      // Redirect to new page
      window.location.href = "letschatt.html";
    }
  });
  