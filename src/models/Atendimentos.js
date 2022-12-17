const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const PsicologosModel = require("./Psicologos");
const PacientesModel = require("./Pacientes");

const AtendimentosModel = db.define(
    "Atendimentos",
    {
        id_atendimento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        data_atendimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        observacao: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        id_paciente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PacientesModel,
                key: "paciente_id",
            },
        },
        id_psicologo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: PsicologosModel,
                key: "psicologo_id",
            },
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);

module.exports = AtendimentosModel;