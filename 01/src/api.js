const axios = require('axios')

const instanciaAxios = axios.create({
	baseURL: process.env.urlApi
})

module.exports = instanciaAxios
