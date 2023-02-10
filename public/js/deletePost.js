// This code helps delete a post from the database

// Function to handle deleting a post
const deleteFormHandler = async (event) => {
    // Stop the default action from happening
    event.preventDefault();
    
    // Get the post ID from the URL
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
    // Send a request to delete the post using the post ID
    const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
    post_id: id
    }),
    headers: {
    'Content-Type': 'application/json'
    }
    });
    
    // If the delete was successful, go back to the dashboard page
    if (response.ok) {
    document.location.replace('/api/dashboard/');
    } else {
    // If the delete was not successful, show an error message
    alert(response.statusText);
    }
    };
    
    // Add the delete form handler to the page
    document.querySelector('.btnDeletePost').addEventListener('click', deleteFormHandler);