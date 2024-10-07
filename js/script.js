document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    // Validation rules
    if (!firstName) {
      displayError("firstNameError", "First name is required");
      isValid = false;
    } else {
      clearError("firstNameError");
    }

    if (!lastName) {
      displayError("lastNameError", "Last name is required");
      isValid = false;
    } else {
      clearError("lastNameError");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      displayError("emailError", "Enter a valid email");
      isValid = false;
    } else {
      clearError("emailError");
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      displayError("phoneNumberError", "Enter a valid phone number");
      isValid = false;
    } else {
      clearError("phoneNumberError");
    }

    if (!password || password.length < 8) {
      displayError(
        "passwordError",
        "Password must be at least 8 characters long"
      );
      isValid = false;
    } else {
      clearError("passwordError");
    }

    if (isValid) {
      // If all validations pass, log the form data
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
      };
      console.log(formData);
      alert("Form submitted successfully!");
    }
  });

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.visibility = "visible";
}

function clearError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.style.visibility = "hidden";
  }
}
