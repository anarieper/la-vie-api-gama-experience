CREATE DATABASE db_lavie;

USE db_lavie;

CREATE TABLE pacientes (
  paciente_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  idade DATE NOT NULL
);

CREATE TABLE psicologos (
  psicologo_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  apresentacao VARCHAR(400) NOT NULL,
  senha VARCHAR(200) NULL
);

CREATE TABLE atendimentos (
  id_atendimento INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  data_atendimento DATE NOT NULL,
  observacao TEXT NOT NULL,
  id_paciente INTEGER NOT NULL,
  CONSTRAINT atendimento_paciente FOREIGN KEY 
            (id_paciente) REFERENCES pacientes(paciente_id),
  id_psicologo INTEGER NOT NULL,
  CONSTRAINT atendimento_psicologo FOREIGN KEY
            (id_psicologo) REFERENCES psicologos(psicologo_id)
);