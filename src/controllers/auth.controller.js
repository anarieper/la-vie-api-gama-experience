const PsicologosModel = require('../models/Psicologos');
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const bcrypt = require("bcrypt");

const authController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const login = await PsicologosModel.findOne({
            where: {
                email,
            },
        });

        if(!login) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        if (!bcrypt.compareSync(senha, login.senha)) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        const token = jwt.sign({
            id: login.psicologo_id,
            nome: login.nome,
            email: login.email,
        }, secret.key);

        return res.status(200).json(token);
    },
};

module.exports = authController;