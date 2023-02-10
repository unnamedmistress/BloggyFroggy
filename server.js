// Use the ENV file
require('dotenv').config();

// Set up the path
const path = require('path');

// Load the express and express-handlebars modules
const express = require('express');
const exphbs = require('express-handlebars');

// Load the express-session module for session data
const session = require('express-session');

// Require all Express routes
const routes = require('./controllers');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Sequelize for session data storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

// Store session data with Sequelize
const sess = {
secret: 'Super secret secret',
cookie: {
// Stored in milliseconds (3600000 ms = 1 hour)
maxAge: 3600000,
},
resave: false,
saveUninitialized: true,
store: new SequelizeStore({
db: sequelize,
}),
};
app.use(session(sess));

// Set up Express-Handlebars with a default layout
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Register a custom helper for express-handlebars
const handlebars = require('handlebars');
handlebars.registerHelper('format_date', function(date) {
const month = new Date(date).getMonth() + 1;
const day = new Date(date).getDate();
const year = new Date(date).getFullYear();
return `${month}/${day}/${year}`;
});

// Set up all Express built-in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// More Express route setup
app.use(require('./controllers/homeRoutes'));
app.use(routes);

// Start the application and open the PORT listener
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}. Visit http://localhost:${PORT} to get started!`);
});
});