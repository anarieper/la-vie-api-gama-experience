const express = require("express");
const psicologosController = require("../controllers/psicologos.controller");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const loginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const validateCreatePsicologo = require("../validations/create/psicologo");
const pacienteCreateValidation = require("../validations/create/paciente");
const pacienteUpdateValidation = require("../validations/update/paciente");

const dashboardController = require("../controllers/dashboard.controller");
const routes = express.Router();

routes.get("/psicologos", psicologosController.list);
routes.get("/psicologos/:id", psicologosController.listId);
routes.post("/psicologos", validateCreatePsicologo, psicologosController.create);
routes.put("/psicologos/:id", psicologosController.update);
routes.delete("/psicologos/:id", psicologosController.delete);

routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacienteId);
routes.post("/pacientes", pacienteCreateValidation, pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacienteUpdateValidation, pacientesController.atualizarPaciente);

routes.post("/login", loginValidation, authController.login);

routes.get("/dashboard/numero-psicologos", dashboardController.numberPsicologos);
routes.get("/dashboard/numero-pacientes", dashboardController.numberPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.numberAtendimentos);
routes.get("/dashboard/numero-atendimentos/media", dashboardController.averageAtendimentosPsicologo);



module.exports = routes;
