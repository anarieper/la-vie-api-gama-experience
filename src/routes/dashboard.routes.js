const express = require("express");
const dashboardController = require("../controllers/dashboard.controller");
const routes = express.Router();

routes.get("/dashboard/numero-psicologos", dashboardController.numberPsicologos);
routes.get("/dashboard/numero-pacientes", dashboardController.numberPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.numberAtendimentos);
routes.get("/dashboard/numero-atendimentos/media", dashboardController.averageAtendimentosPsicologo);

module.exports = routes;