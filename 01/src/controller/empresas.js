const fs = require("fs/promises");
const arquivoEmpresas = "./empresas.json";
require('dotenv').config()
const axios = require('axios')


class Empresas {

  constructor() {
    this.atualizarLista = this.atualizarLista.bind(this);
    this.listarEmpresas = this.listarEmpresas.bind(this);
}

  async atualizarLista(empresa) {
    let data = await fs.readFile(arquivoEmpresas);
    data = JSON.parse(data);
    data.empresas.push(empresa);
    await fs.writeFile(arquivoEmpresas, JSON.stringify(data));
  };

  async listarEmpresas(req, res) {
    const { dominioEmpresa } = req.params  
    const path = process.env.urlApi

    const params = {
      api_key: process.env.apiKey,
      domain: dominioEmpresa
    }

    try {
    const { data } = await axios.get(path, { params })

    if (data.company_name) {
      await this.atualizarLista(data)
    }
    return res.status(200).json(data);
      
    } catch (error) {
      error ? 
      console.log(error.message) : 
      console.log(error);

    return res.status(500).json({message: 'Erro interno do servidor'});
  }

  }
}

module.exports = new Empresas();
