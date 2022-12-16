const express = require("express");
const routes = express.Router();
const pacienteCreateValidation = require("../validations/create/paciente");
const pacienteUpdateValidation = require("../validations/update/paciente");
const pacientesController = require("../controllers/pacientesController");

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacienteId);
routes.post("/pacientes", pacienteCreateValidation, pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacienteUpdateValidation, pacientesController.atualizarPaciente);

module.exports = routes;