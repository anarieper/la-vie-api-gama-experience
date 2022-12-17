const express = require("express");
const atendimentosController = require("../controllers/atendimento.controller");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologos.controller");
const authController = require("../controllers/auth.Controller");
const loginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const validateCreatePsicologo = require("../validations/create/psicologo");
const validateCreatePaciente = require("../validations/create/paciente");
const validateCreateAtendimento = require("../validations/create/atendimento");
const dashboardController = require("../controllers/dashboard.controller");
const routes = express.Router();

routes.get("/psicologos", psicologosController.list);
routes.get("/psicologos/:id", psicologosController.listId);
routes.post("/psicologos", validateCreatePsicologo, psicologosController.create);
routes.put("/psicologos/:id", psicologosController.update);
routes.delete("/psicologos/:id", psicologosController.delete);

routes.get("/pacientes", pacientesController.list);
routes.get("/pacientes/:id", pacientesController.listId);
routes.post("/pacientes", validateCreatePaciente, pacientesController.create);
routes.put("/pacientes/:id", pacientesController.update);
routes.delete("/pacientes/:id", pacientesController.delete);

routes.get("/atendimentos", atendimentosController.list);
routes.get("/atendimentos/:id", atendimentosController.listId);
routes.post("/atendimentos", auth, validateCreateAtendimento, atendimentosController.create);

routes.post("/login", loginValidation, authController.login);

routes.get("/dashboard/numero-psicologos", dashboardController.numberPsicologos);
routes.get("/dashboard/numero-pacientes", dashboardController.numberPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.numberAtendimentos);
routes.get("/dashboard/numero-atendimentos/media", dashboardController.averageAtendimentosPsicologo);

module.exports = routes;