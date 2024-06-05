const fs = require("fs/promises");
const arquivoEmpresas = "./empresas.json";
require('dotenv').config()

class Empresas {

  async atualizarLista(empresa) {
    let data = await fs.readFile(arquivoEmpresas);
    data = JSON.parse(data);
    data.empresas.push(empresa);
    await fs.writeFile(arquivoEmpresas, JSON.stringify(data));
    return
  };

  async listarEmpresas(req, res) {
    const { dominioEmpresa } = req.params
    const api_key = process.env.apiKey
    const domain = process.env.urlApi

    console.log(api_key, domain);
      



    return res.json();
  }
}

module.exports = new Empresas();
