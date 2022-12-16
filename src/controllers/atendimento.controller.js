const AtendimentosModel = require("../models/Atendimentos");
const jwt = require("jsonwebtoken");

module.exports = {
    async listAllAtendimentos(req, res) {
        const atendimentos = await AtendimentosModel.findAll();
        return res.status(200).json(atendimentos)
    },
    async getAtendimento(req, res) {
        const { id } = req.params;
        const atendimento = await AtendimentosModel.findOne({
            where: {
                atendimentos_id: id,
            },
        });
        if(atendimento === null){
            return res.status(404).json("Id não encontrado");
        } else {
            return res.status(200).json(atendimento);
        }
    },
    async createAtendimento(req, res) {
        const { id_paciente, observacao, data_atendimento } = req.body;
        const { psicologo_id } = jwt.decode(req.headers.authorization);
        if(!id_paciente || !observacao || !data_atendimento) {
            return res.status(400).json("Dados inválidos");
        }
        const atendimento = await AtendimentosModel.create({
            id_paciente,
            data_atendimento,
            observacao,
            psicologo_id
        });
        return res.status(201).json(atendimento);
    },
}