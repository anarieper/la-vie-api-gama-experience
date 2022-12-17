const PacientesModel = require("../models/Pacientes");

const pacientesController = {
    async list(req, res) {
        try {
            const listPacientes = await PacientesModel.findAll();

            return res.status(200).json(listPacientes);
        } catch (err) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    async listId(req, res) {
        try {
            const { id } = req.params;
            const listPacienteId = await PacientesModel.findOne({
                where: {
                    paciente_id: id,
                }
            });

            if (!listPacienteId) {
                return res.status(404).json("Id não encontrado")
            };

            return res.status(200).json(listPacienteId);
        } catch (error) {
            console.log(error);
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    async create(req, res) {
        try {
            const { nome, email, idade } = req.body;

            const newPaciente = await PacientesModel.create({
                nome,
                email,
                idade,
            });

            return res.status(201).json(newPaciente);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(422).json('Email já cadastrado')
            }
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
    
    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            const updatePaciente = await PacientesModel.update({
                nome,
                email,
                idade,
            }, {
                where: {
                    paciente_id: id
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

            const deletePaciente = await PacientesModel.destroy({
                where: {
                    paciente_id: id,
                },
            });

            if (!deletePaciente) {
                return res.status(404).json("Id não encontrado")
            };

            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
}

module.exports = pacientesController;