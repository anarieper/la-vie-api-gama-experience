const express = require("express");
const auth = require("../middlewares/auth");

const routes = express.Router();
const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");
const pacientesRoutes = require("./pacientes.route");

routes.use(authRoutes);
routes.use(dashboardRoutes);
routes.use(pacientesRoutes);

module.exports = routes;
