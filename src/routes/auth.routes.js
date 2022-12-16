const express = require("express");
const routes = express.Router();
const authController = require("../controllers/auth.controller");
const loginValidation = require("../validations/auth/login");

routes.post("/login", loginValidation, authController.login);

module.exports = routes;