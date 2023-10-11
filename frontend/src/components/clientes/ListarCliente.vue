<template>
    <h3>Clientes cadastrados</h3>
    {{ mensagem }}
    <ul>
        <li v-for="cliente in clientes">
            {{cliente.nome}} <a @click="deletar(cliente.id)" href="#">
                Excluir
            </a>
        </li>
    </ul>
</template>

<script>

import axios from 'axios'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "CadastrarCliente",
    data() {
        return {
            clientes: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
        async listar() {
            const responce = await minhaApi.get("/cliente")
            this.clientes = responce.data
        },
        async deletar(id){
            const responce = await minhaApi.delete(`/cliente/${id}`)
            this.mensagem = responce.data
            this.listar()
        }
}
    }

</script>