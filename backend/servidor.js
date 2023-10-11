import express from 'express'
import cors from 'cors'
import { cadastrarCliente, listarClientes, deletarCliente } from './services/ClienteService.js'
import { cadastrarCarrinho } from './services/CarrinhoService.js'

const app = express()
const porta = 3001

app.use(cors())
app.use(express.json())

app.get('/cliente', async function (request, responce) {
  const clientes = await listarClientes()
  responce.send(clientes)
})

app.post('/cliente/cadastrar', async function (request, responce) {
  const cliente = request.body
  const result = await cadastrarCliente(cliente)
  responce.json(result)
})

app.delete('/cliente/:id', async function (request, responce) {
  const id = request.params.id
  const clientes = await deletarCliente(id)
  responce.send(clientes)
})

app.post('/carrinho/cadastrar', async function (request, responce) {
  const carrinho = request.body
  const result = await cadastrarCarrinho(carrinho)
  responce.json(result)
})

console.log(`Servidor UP http://localhost:${porta}`);
app.listen(porta)
