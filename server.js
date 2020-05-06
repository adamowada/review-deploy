'use strict';

require('dotenv').config();
const express = require('express');
const pg = require('pg');

const app = express();
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);

app.get('/', showPeople);
app.get('/types', showTypes);

function showPeople(req, res) {
  const SQL = 'SELECT * FROM people ORDER BY name ASC';
  client.query(SQL)
    .then(results => {
      res.status(200).render('index', { people: results.rows });
    });
}

function showTypes(req, res) {
  const SQL = 'SELECT DISTINCT TYPE FROM people ORDER BY type ASC';
  client.query(SQL)
    .then(results => {
      res.status(200).render('types', { types: results.rows });
    });
}

function startServer() {
  app.listen(process.env.PORT, () => console.log('Server listening on', process.env.PORT));
}
client.connect()
  .then(startServer);


app.use('/bad', (request, response) => {
  throw new Error('Shit broke!');
});

  // add 404
app.use('*', (request, response) => {
  response.status(404).send(`Can't find what you're looking for.`);
});

  // add 500
app.use((err, request, response, next) => {
  response.status(500).send(err.message);
});