const { Comment } = require('../models');

const commentData = [
{
"comment_body": "5G technology has been a game-changer for our communication network, providing faster speeds and greater reliability.",
"post_id": 1,
"user_id": 4
},
{
"comment_body": "The rise of AI and machine learning has revolutionized the way we process and analyze data, leading to new and innovative solutions.",
"post_id": 4,
"user_id": 2
},
{
"comment_body": "The Internet of Things (IoT) has connected devices and systems in ways we never thought possible, creating a smarter and more efficient world.",
"post_id": 2,
"user_id": 1
},
{
"comment_body": "Cloud computing has transformed the way we store and access data, allowing for more flexible and scalable solutions.",
"post_id": 2,
"user_id": 3
}
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;