const express = require('express');
const routes = require("./routes");
const requestLogs = require("./middlewares/requestLog");
const db = require("./database/connection");
const handleError = require('./middlewares/handleError');

const server = express();

server.use(express.json());

server.use(requestLogs);

server.use(routes);

server.use(handleError);

server.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");

  db.hasConnection();
});