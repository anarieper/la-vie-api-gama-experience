const PsicologosModel = require("../models/psicologos");

module.exports = {
    async createPsicologo(req, res) {
        const { nome, email, senha, apresentacao } = req.body;
        if(!nome || !email || !senha || !apresentacao) return res.status(400).json("Dados inválidos");
        const psicologo = await PsicologosModel.create({nome, email, senha, apresentacao});
        return res.status(201).json(psicologo);
    },
    async updatePsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        if(!nome || !email || !senha || !apresentacao) return res.status(400).json("Dados inválidos");
        const psicologo = await PsicologosModel.findOne({
            where: {
                psicologo_id: id,
            }
        });
        if (psicologo === null) return res.status(404).json("Id não encontrado");

        const psicologoUpdated = await PsicologosModel.update({nome, email, senha, apresentacao}, {
            where: {
                psicologo_id: id,
            }
        });
        return res.status(200).json(psicologoUpdated);
    },
    async deletePsicologo(req, res) {
        const { id } = req.params;
        const psicologo = await PsicologosModel.findOne({
            where: {
                psicologo_id: id,
            }
        });
        if (psicologo === null) return res.status(404).json("Id não encontrado");
        const psicologoDestroyed = await PsicologosModel.destroy({
            where: {
                psicologo_id: id,
            }
        });
        return res.status(204).json(psicologoDestroyed);
    },
}