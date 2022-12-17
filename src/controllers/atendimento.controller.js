const { AtendimentosModel, PsicologosModel, PacientesModel } = require("../models");
const base64 = require('base-64');
const utf8 = require('utf8');

const atendimentosController = {

    // Listar todos os Atendimentos
    async list(req, res) {
        try {
            const listAtendimentos = await AtendimentosModel.findAll({
                includes: PsicologosModel,
                PacientesModel,
            });
            return res.status(200).json(listAtendimentos);
        } catch (err) {
            if (err.name === 'SequelizeForeignKeyConstraintError') {
                return res.status(400).json('Não é possível deletar o psicólogo pois ele possui atendimentos ativos')
            }
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
    
    // Listar Atendimento por Id
    async listId(req, res) {
        try {
            const { id } = req.params;

            const listAtendimentosId = await AtendimentosModel.findOne({
                where: {
                    id_atendimento: id,
                },
            });

            if (!listAtendimentosId) {
                return res.status(404).json("Id não encontrado")
            };

            return res.status(200).json(listAtendimentosId);
        } catch (error) {
            console.error(error);
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },

    // Criar Atendimento 
    async create(req, res) {
        try {
            const encoded = req.headers.authorization.slice(7).split(".")
            const bytes = base64.decode(encoded[1]);
            const text = utf8.decode(bytes);
            const id_psicologo = JSON.parse(text).id;

            const { data_atendimento, observacao, id_paciente } = req.body;

            const newAtendimento = await AtendimentosModel.create({
                id_paciente,
                id_psicologo,
                data_atendimento,
                observacao,
            });

            return res.status(201).json(newAtendimento);
        } catch (error) {
            console.log(error);
            return res.status(500).json("Algo errado aconteceu 🚨");
        }
    },
}

module.exports = atendimentosController;