const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const PacientesModel = db.define(
    "Pacientes",
    {
        paciente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        idade: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "pacientes",
        timestamps: false,
    }
);

module.exports = PacientesModel;