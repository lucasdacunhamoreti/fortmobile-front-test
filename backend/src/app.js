const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorMiddleware);

app.get('/', (_request, response) => {
  response.send();
});

module.exports = app;