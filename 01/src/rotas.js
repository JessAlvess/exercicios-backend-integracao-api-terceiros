const express = require('express')
const { listarEmpresas } = require('./controller/empresas')

const rotas = express()

rotas.get('/empresas/:dominioEmpresa', listarEmpresas)

module.exports = rotas