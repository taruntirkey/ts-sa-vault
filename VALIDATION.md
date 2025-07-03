Client-side validation in JavaScript ensures that user inputs meet specific criteria before being sent to the server. Here's an example of how you can implement it:

Example: Simple Form Validation

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation</title>
  <style>
    .error { color: red; font-size: 0.9em; }
  </style>
</head>
<body>
  <h2>Registration Form</h2>
  <form id="registrationForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <span class="error" id="usernameError"></span>
    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <span class="error" id="emailError"></span>
    <br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <span class="error" id="passwordError"></span>
    <br><br>

    <button type="submit">Submit</button>

  </form>

  <script>
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Clear previous errors
      document.getElementById('usernameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';

      let isValid = true;

      // Validate username
      const username = document.getElementById('username').value.trim();
      if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
      } else if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
        isValid = false;
      }

      // Validate email
      const email = document.getElementById('email').value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
      }

      // Validate password
      const password = document.getElementById('password').value.trim();
      if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
      } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
      }

      // If all validations pass, submit the form
      if (isValid) {
        alert('Form submitted successfully!');
        // You can proceed with form submission or further processing here
      }
    });
  </script>
</body>
</html>
```

Key Features:
Real-Time Validation: You can extend this to validate fields as the user types.
Error Messages: Displayed dynamically for each field.
Prevent Default Submission: Ensures the form isn't submitted until all validations pass.

This approach improves user experience by catching errors early, reducing unnecessary server requests.
