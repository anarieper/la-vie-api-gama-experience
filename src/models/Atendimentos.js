const db = require("../database/connection");
const { DataTypes } = require('sequelize');
const { Psicologos } = require("./Psicologos");
const { Pacientes } = require("./Pacientes");

const Atendimentos = db.define("Atendimentos", {
    atendimentos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
        type: DataTypes.STRING,
    }, 
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    psicologos_psicologos_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "psicologos_id",
        }
    },
    pacientes_paciente_id:{
        type: DataTypes.INTEGER, 
        references: {
            model: Pacientes, 
            key: "paciente_id",
        }
    },
}, {
   tableName: "atendimentos", 
});

module.exports = Atendimentos;