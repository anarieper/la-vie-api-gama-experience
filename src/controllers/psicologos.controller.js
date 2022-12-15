const PacientesModel = require("./Pacientes");
const PsicologosModel = require("./Psicologos");
const AtendimentosModel = require("./Atendimentos");

PacientesModel.belongsToMany(PsicologosModel, {
    foreignKey: "id_paciente",
    through: AtendimentosModel,
});

PsicologosModel.belongsToMany(PacientesModel, {
    foreignKey: "id_psicologo",
    through: AtendimentosModel,
});

module.exports = {
    PacientesModel,
    PsicologosModel,
    AtendimentosModel,
}