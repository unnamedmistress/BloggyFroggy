// Import the required modules and models
const { User, Post, Comment } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/new', withAuth, async (req, res) => {
try {
// Create a new post with the given title, content, and user ID
const postData = await Post.create({
title: req.body.title,
post_content: req.body.post_content,
user_id: req.session.user_id
});
// Redirect to the dashboard page
res.redirect('/api/dashboard');
} catch (err) {
console.log(err);
// Return a server error
res.status(500).json(err);
}
});

// Update an existing post
router.post('/update', withAuth, async (req, res) => {
try {
// Update the post with the given title and content
const postData = await Post.update({
title: req.body.title,
post_content: req.body.post_content
}, {
where: {
id: req.body.postId
}
});
// If the post doesn't exist, return a 404 error
if (!postData) {
res.status(404).json({ message: 'No post found with this id' });
return;
}
// Redirect to the dashboard page
res.redirect('/api/dashboard');
} catch (err) {
console.log(err);
// Return a server error
res.status(500).json(err);
}
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
try {
// Delete the post with the given ID
const postData = await Post.destroy({
where: {
id: req.params.id
}
});
// If the post doesn't exist, return a 404 error
if (!postData) {
res.status(404).json({ message: 'No post found with this id' });
return;
}
// Return a success message and redirect to the dashboard page
res.status(200).json(postData);
} catch (err) {
console.log(err);
// Return a server error
res.status(500).json(err);
}
});

module.exports = router;