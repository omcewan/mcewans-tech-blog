// import packages and set variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers')
const path = require('path');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const sequelize = require('./config/connection');

// set up template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes)

// turn on the connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`);
  });
});
