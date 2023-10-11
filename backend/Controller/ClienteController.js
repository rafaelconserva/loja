import express from 'express'
import { cadastrarCliente, listarClientes, deletarCliente } from './services/ClienteService.js'

const router = express.Router()
router.get('/cliente', async function (request, responce) {
    const clientes = await listarClientes()
    responce.send(clientes)
  })
  
router.post('/cliente/cadastrar', async function (request, responce) {
    const cliente = request.body
    const result = await cadastrarCliente(cliente)
    responce.json(result)
  })

  app.delete('/cliente/:id', async function (request, responce) {
    const id = request.params.id
    const clientes = await deletarCliente(id)
    responce.send(clientes)
  })
  export default router