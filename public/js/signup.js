//This code helps a new user sign up for an account

//Function to handle the new user sign up form
const signupFormHandler = async (event) => {
  //Prevents the default action of the form submission
  event.preventDefault();
  
  //Gets the values entered in the form fields and removes any extra spaces
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  //If all fields have values, send a request to the API
  if (username && email && password) {
  //Fetches the API to add the new user to the database
  const response = await fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({ username, email, password }),
  headers: { 'Content-Type': 'application/json' },
  });
  //If the API request is successful, redirect the user to the homepage
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign up.');
  }
  }
  };
  
  //Adds a submit event listener to the sign up form
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);