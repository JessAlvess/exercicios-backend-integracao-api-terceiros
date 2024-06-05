const empresaMock = {
    nome: "Nome da Empresa",
    cnpj: "00.000.000/0000-00",
    endereco: {
        rua: "Nome da Rua",
        numero: 123,
        bairro: "Nome do Bairro",
        cidade: "Nome da Cidade",
        estado: "Nome do Estado",
        cep: "00000-000"
    },
    telefone: "(00) 0000-0000",
    email: "contato@empresa.com",
    site: "http://www.empresa.com",
    funcionarios: [
        {
            nome: "Nome do Funcionário 1",
            cargo: "Cargo do Funcionário 1",
            salario: 3000
        },
        {
            nome: "Nome do Funcionário 2",
            cargo: "Cargo do Funcionário 2",
            salario: 4000
        }
    ]
};

module.exports = empresaMock