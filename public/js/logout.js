// This is the code for logging out a user

// Function to handle the logout process
const logout = async () => {
  // Sends a request to the API to log out the user
  const response = await fetch('/api/users/logout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
  });
  // If the logout was successful, go back to the homepage
  if (response.ok) {
  document.location.replace('/');
  } else {
  // If the logout was not successful, show an alert
  alert('Failed to log out.');
  }
  };
  
  // Adds an event listener to the logout button
  document.querySelector('#logout').addEventListener('click', logout);