// This is the code for creating a new comment
// Only logged-in users can post comments
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// This function is called when a user wants to post a new comment
router.post('/', withAuth, async (req, res) => {
// Check if the user is logged in
if (req.session) {
try {
// Create a new comment in the database
const commentData = await Comment.create({
comment_body: req.body.comment_body,
post_id: req.body.post_id,
user_id: req.session.user_id,
});
// Send the new comment data back to the user
res.json(commentData);
} catch (err) {
// If there is an error, log it and send a bad request response
console.log(err);
res.status(400).json(err);
}
}
});

module.exports = router;