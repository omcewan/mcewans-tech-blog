const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path');

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on the connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on ${PORT}`);
  });
});
