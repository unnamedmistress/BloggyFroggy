const { User } = require('../models');

const userData = [
{
"username": "Jon Snow",
"email": "jonsnow@got.com",
"password": "password1111"
},
{
"username": "Daenerys Targaryen",
"email": "daenerys@got.com",
"password": "password2222"
},
{
"username": "Tyrion Lannister",
"email": "tyrion@got.com",
"password": "password3333"
},
{
"username": "Arya Stark",
"email": "arya@got.com",
"password": "password4444"
}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;