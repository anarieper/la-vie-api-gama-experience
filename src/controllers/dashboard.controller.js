const { PsicologosModel, PacientesModel, AtendimentosModel } = require("../models/index");

module.exports = {
    async numberPsicologos(req, res) {
        const psicologosNumber = await PsicologosModel.count();

        return res.status(200).json(psicologosNumber)
    },
    async numberPacientes(req, res) {
        const pacientesNumber = await PacientesModel.count();

        return res.status(200).json(pacientesNumber)
    },
    async numberAtendimentos(req, res) {
        const atendentesNumber = await AtendimentosModel.count();

        return res.status(200).json(atendentesNumber)
    },
    async averageAtendimentosPsicologo(req, res) {
        const countPsicologo = await PsicologosModel.count();
        const countAtendimentos = await AtendimentosModel.count();

        return res.status(200).json(`A média te atendimentos por psicologo é: ${countAtendimentos/countPsicologo}`)
    },
}