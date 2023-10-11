const db = require("./config/db")
const EnderecoService = require("./services/EnderecoService")
const ClienteService = require("./services/ClienteService")
const CategoriaService = require("./services/CategoriaService")

const clientId = 1
const enderecoService = new EnderecoService()
// enderecoService.findAddressByClientId(clientId)

const clienteService = new ClienteService()
// clienteService.findAllClients()

const categoriaSevice = new CategoriaService()


clienteService.findByCpf('091.576.154-88', function (clienteEncontrado) {
    if (clienteEncontrado) {
        console.log('Cliente encontrado:', clienteEncontrado);
    } else {
        console.log('Cliente não encontrado');
    }
});

categoriaSevice.findByCategoria('1', function (categoriaEncontrada) {
    if (categoriaEncontrada) {
        console.log('Categoria encontrada:',categoriaEncontrada);
    } else {
        console.log('Categoria não encontrada');
    }
});




db.end()