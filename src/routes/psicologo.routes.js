const express = require("express");
const routes = express.Router();

const psicologoController = require("../controllers/psicologo.controller");

routes.put("/psicologos/:id", psicologoController.updatePsicologo);
routes.delete("/psicologos/:id", psicologoController.deletePsicologo);
routes.post("/psicologos", psicologoController.createPsicologo);

export default routes;