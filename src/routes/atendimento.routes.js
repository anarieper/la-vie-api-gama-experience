const express = require("express");
const routes = express.Router();

const atendimentoController = require("../controllers/atendimento.controller");

routes.get("/atendimentos", atendimentoController.listAllAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.getAtendimento);
routes.post("/atendimentos", atendimentoController.createAtendimento);

module.exports = routes;