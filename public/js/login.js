//* This code helps a user log in
//*

// Function that handles the user login form
const loginFormHandler = async (event) => {
  // Prevent the default action of the event
  event.preventDefault();
  
  // Get the email and password from the form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
  // Make sure both email and password are filled out
  if (email && password) {
  // Send the email and password to the API for login
  const response = await fetch('/api/users/login', {
  method: 'POST',
  body: JSON.stringify({ email, password }),
  headers: { 'Content-Type': 'application/json' },
  });

  // If the login was successful, go to the homepage
  if (response.ok) {
    document.location.replace('/');
  } else {
    // Show an error message if login failed
    alert('Failed to log in.');
  }
  }
  };
  
  // Listen for submit event on the login form
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  
  
  
  