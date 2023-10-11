<template>
    <h3>Cadastro de Carrinhos</h3>
    <p>
        {{ notificacao }}
    </p>

    <label>Cliente</label>
    <input name="cliente_id" v-model="carrinho.cliente" />

    <label>Data Cadastro</label>
    <input name="dt_cadastro" v-model="carrinho.dt_cadastro" />

    <label>Data Atualização</label>
    <input name="dt_atualizacao" v-model="carrinho.dt_atualizacao" />

    <button @click="cadastrar()">
        Cadastrar
    </button>
</template>
  
<script>

import axios from 'axios'
const minhaApi = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "CadastrarCarrinho",
    data() {
        return {
            carrinho: {
                cliente: null,
                dt_cadastro: null,
                dt_atualizacao: null
            },
            notificacao: null
        }
    },
    methods: {
        async cadastrar() {
            const responce = await minhaApi.post('/carrinho/cadastrar', this.carrinho)
            this.notificacao = responce.data
            console.log(responce.data);
        },
    }
}
</script>