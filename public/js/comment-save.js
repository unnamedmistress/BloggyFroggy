//* This is the helper code to save post Comments
//*

// This function is in charge of sending the comment data to the API to save it in the database
const commentFormHandler = async (event) => {
	// Stop the page from refreshing when the submit button is clicked
	event.preventDefault();
	// Get the text written in the comment body field
	const comment_body = document.querySelector('input[name="comment-body"]').value.trim();
	// Get the post ID number from the URL
	const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
	// Check that the comment body is not empty
	if (comment_body) {
	// Send the comment data to the Comment API
	const response = await fetch("/api/comments", {
	method: "POST",
	body: JSON.stringify({
	post_id,
	comment_body,
	}),
	headers: {
	"Content-Type": "application/json",
	},
	});
	// If the API call was successful, refresh the page to show the new comment
	if (response.ok) {
	document.location.reload();
	} else {
	alert(response.statusText);
	document.querySelector("#comment-form").style.display = "block";
	}
	}
	};
	
	// Listen for when the comment form is submitted and run the commentFormHandler function
	document.querySelector(".comment-form").addEventListener("submit", commentFormHandler);