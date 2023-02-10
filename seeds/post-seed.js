const { Post } = require('../models');

const postData = [
{
"title": "AI-powered Virtual Assistants",
"post_content": "Virtual assistants powered by artificial intelligence have become a popular tool in recent years, offering advanced voice recognition and natural language processing capabilities. These virtual assistants can be found on smartphones, smart speakers, and other connected devices and are used for a variety of tasks, from setting reminders to playing music.",
"user_id": 1
},
{
"title": "Augmented Reality Headset Technology",
"post_content": "Augmented reality (AR) headset technology has seen significant advances in recent years, offering users a completely new way of experiencing the world around them. With AR, digital information is overlaid onto the real world, creating a more immersive and interactive experience. The technology has a wide range of potential applications, from gaming to education, and is expected to become even more advanced in the coming years.",
"user_id": 2
},
{
"title": "Foldable Smartphone Technology",
"post_content": "Foldable smartphone technology has become a hot topic in recent years, offering a new form factor for smartphones that can be folded like a book. This new technology enables users to have a larger screen when they need it, and a smaller, more pocketable device when they don't. It has the potential to change the way people use their smartphones and has already been adopted by several major smartphone manufacturers.",
"user_id": 1
},
{
"title": "Quantum Computing Advancements",
"post_content": "Quantum computing has made significant advancements in recent years, offering a new type of computing that can solve problems faster and more efficiently than traditional computers. This new technology has the potential to revolutionize fields such as cryptography, drug discovery, and financial modeling, and is expected to become even more advanced in the coming years.",
"user_id": 3
}
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;