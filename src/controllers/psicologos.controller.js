const PsicologosModel = require("../models/Psicologos");
const bcrypt = require("bcrypt");

const psicologosController = {
    async list(req, res) {
        try {
            const listPsicologos = await PsicologosModel.findAll({
                attributes: ['psicologo_id', 'nome', 'email', 'apresentacao']
            });

            return res.status(200).json(listPsicologos);
        } catch (err) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    async listId(req, res) {
        try {
            const { id } = req.params;
            const listPsicologoId = await PsicologosModel.findOne({
                attributes: ['psicologo_id', 'nome', 'email', 'apresentacao'],
                where: {
                    psicologo_id: id,
                },
            });

            if (!listPsicologoId) {
                return res.status(404).json("Id não encontrado")
            };

            return res.status(200).json(listPsicologoId);
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    async create(req, res) {
        try {
            const { nome, email, apresentacao, senha } = req.body;

            const newPassword = bcrypt.hashSync(senha, 10);

            const newPsicologo = await PsicologosModel.create({
                nome,
                email,
                apresentacao,
                senha: newPassword,
            });

            return res.status(201).json(newPsicologo);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json('Email já cadastrado')
            }
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            const updatePsicologo = await PsicologosModel.update({
                nome,
                email,
                idade,
            }, {
                where: {
                    psicologo_id: id
                },
            });

            return res.status(200).json("Dados atualizados");
        } catch (error) {
            return res.status(400).json("Algo errado aconteceu 🚨");
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const deletePsicologo = await PsicologosModel.destroy({
                where: {
                    psicologo_id: id,
                },
            });

            if (!deletePsicologo) {
                return res.status(404).json("Id não encontrado")
            };

            return res.sendStatus(204);
        } catch (error) {
          
            console.log(error);
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
}

module.exports = psicologosController;