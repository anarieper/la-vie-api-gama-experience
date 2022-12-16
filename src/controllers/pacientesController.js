const {Pacientes} = require("../models");

const pacientesController = {

    async cadastrarPaciente(req, res){
        const { nome, email, idade } = req.body;

        const novoPaciente = await Pacientes.create({
            nome, 
            email,
            idade,
        });

        res.json(novoPaciente);
    },

    async listarPacientes(req, res){
        const listaDePacientes = await Pacientes.findAll();

        res.json(listaDePacientes);
    },

    async listarPacienteId(req, res){
        const { id } = req.params;

        const listaPacienteId = await Pacientes.findOne({
            where: {
                paciente_id: id,
            },
        });

        if(listaPacienteId === null){
            return res.status(404).json("Id não encontrado");
        } else {
            res.json(listaPacienteId);
        }
        

    },

    async atualizarPaciente(req, res){
        const { id } = req.params;
        const { nome, email, idade } = req.body;

        await Pacientes.update({
            nome,
            email,
            idade,
        },
        {
            where: {
                paciente_id: id,
            },
        }
        );

        res.status(200).json(req.body);
    },

    async deletarPaciente(req, res){
        const { id } = req.params;
        
        const findPaciente = await Pacientes.findOne({
            where: {
                paciente_id: id,
            }
        });

        if(findPaciente === null){                                             
            res.status(404).json("Id não encontrado");
        } else{ 

            try {
                await Pacientes.destroy({
                    where: {
                        paciente_id: id,  
                    } 
                });

                return res.status(204).json("Cadastro deletado!");

            } catch (error){
                if (error.name === 'SequelizeForeignKeyConstraintError') {
                    return res.status(400).json('Não é possível deletar o paciente pois ele possui atendimentos ativos')
                }
            }     
        }

},


}; 

module.exports = pacientesController;